import { getCallVolumeLabel } from "@/lib/report";

export type CrmLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  callVolume?: string;
  fbc?: string | null;
  fbp?: string | null;
};

function getDefaultTitle(source: string): string {
  if (source.includes("Report")) return "Industry Report Request";
  if (source.includes("Demo")) return "Demo Request";
  return "Website Lead";
}

export async function submitLeadToCrm(input: CrmLeadInput): Promise<void> {
  const apiUrl = process.env.CRM_API_URL?.trim();
  const apiKey = process.env.CRM_API_KEY?.trim();
  const orgId = process.env.CRM_ORG_ID?.trim();

  if (!apiUrl || !apiKey || !orgId) {
    throw new Error("Missing CRM environment variables");
  }

  const fullName = `${input.firstName} ${input.lastName}`.trim();
  const client = input.email.includes("@")
    ? (input.email.split("@")[1] ?? "Unknown")
    : "Unknown";

  const payload: Record<string, any> = {
    name: fullName,
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    client,
    title: getDefaultTitle(input.source),
    source: input.source,
  };

  if (input.fbc) payload.fbc = input.fbc;
  if (input.fbp) payload.fbp = input.fbp;

  if (input.callVolume) {
    payload.monthlyInboundCallVolume =
      getCallVolumeLabel(input.callVolume) ?? input.callVolume;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "x-organization-id": orgId,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorDetail = errorText;
    try {
      const errorJson = JSON.parse(errorText) as {
        message?: string;
        error?: string;
      };
      errorDetail = errorJson.message ?? errorJson.error ?? errorText;
    } catch {
      // keep raw text
    }
    console.error("CRM API error:", response.status, errorDetail);
    throw new Error(errorDetail || "CRM request failed");
  }
}
