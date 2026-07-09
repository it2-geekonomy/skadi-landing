import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  source?: string;
};

const DEFAULT_SOURCE = "Skadi Website Contact Form";

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: parts[0] };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export async function POST(request: Request) {
  const apiUrl = process.env.CRM_API_URL;
  const apiKey = process.env.CRM_API_KEY;
  const orgId = process.env.CRM_ORG_ID;

  if (!apiUrl || !apiKey || !orgId) {
    console.error("Missing CRM environment variables");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const source = body.source?.trim() || DEFAULT_SOURCE;

  let firstName = body.firstName?.trim() ?? "";
  let lastName = body.lastName?.trim() ?? "";

  if ((!firstName || !lastName) && body.name?.trim()) {
    const split = splitName(body.name);
    if (!firstName) firstName = split.firstName;
    if (!lastName) lastName = split.lastName;
  }

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`.trim();
  const client =
    company ||
    (email.includes("@") ? (email.split("@")[1] ?? "Unknown") : "Unknown");

  try {
    const crmResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "x-organization-id": orgId,
      },
      body: JSON.stringify({
        name: fullName,
        firstName,
        lastName,
        email,
        phone,
        client,
        title: "Demo Request",
        source,
      }),
    });

    if (!crmResponse.ok) {
      const errorText = await crmResponse.text();
      let errorDetail = errorText;
      try {
        const errorJson = JSON.parse(errorText) as { message?: string };
        errorDetail = errorJson.message ?? errorText;
      } catch {
        // keep raw text
      }
      console.error("CRM API error:", crmResponse.status, errorDetail);
      return NextResponse.json(
        { error: "Failed to submit. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
