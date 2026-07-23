import { NextResponse } from "next/server";

type RetellCallBody = {
  phone?: string;
};

function stripToDigits(value: string): string {
  return value.replace(/\D/g, "");
}

function normalizeFromNumber(phone: string): string | null {
  const digits = stripToDigits(phone);
  if (!digits) return null;
  return `+${digits}`;
}

function normalizeToUsE164(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) return null;

  let digits = stripToDigits(trimmed);

  if (trimmed.startsWith("+")) {
    if (digits.startsWith("1") && digits.length === 11) {
      return `+${digits}`;
    }
    return null;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  return null;
}

export async function POST(request: Request) {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.RETELL_AGENT_ID;
  const fromNumber = normalizeFromNumber(process.env.RETELL_FROM_NUMBER ?? "");
  const campaignId = process.env.RETELL_CAMPAIGN_ID ?? "email_campaign_1";

  if (!apiKey || !agentId || !fromNumber) {
    console.error("Missing Retell environment variables");
    return NextResponse.json(
      { error: "Call service is not configured." },
      { status: 500 },
    );
  }

  let body: RetellCallBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const rawPhone = body.phone?.trim() ?? "";

  if (!rawPhone) {
    return NextResponse.json(
      { error: "Please enter your phone number." },
      { status: 400 },
    );
  }

  const toNumber = normalizeToUsE164(rawPhone);
  if (!toNumber) {
    return NextResponse.json(
      { error: "Please enter a valid US phone number." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://api.retellai.com/v2/create-phone-call", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_number: fromNumber,
        to_number: toNumber,
        override_agent_id: agentId,
        retell_llm_dynamic_variables: {
          prospect_name: "",
          prospect_company: "",
          campaign_id: campaignId,
        },
      }),
    });

    const data = (await response.json()) as {
      call_id?: string;
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      console.error("Retell API error:", response.status, data);

      const retellMessage = data.message ?? data.error ?? "";
      const friendlyError = retellMessage.includes("not found from phone-number")
        ? "Outbound calling is not set up yet. Add your real Retell phone number to RETELL_FROM_NUMBER in .env.local."
        : retellMessage || "Could not start the call. Please try again.";

      return NextResponse.json({ error: friendlyError }, { status: 502 });
    }

    console.log("Retell call started:", { callId: data.call_id, toNumber });

    return NextResponse.json(
      {
        success: true,
        callId: data.call_id,
        message: "Skadi is calling you now. Please answer your phone.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Retell call error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
