import { NextResponse } from "next/server";
import { submitLeadToCrm } from "@/lib/crm";
import { isValidCallVolume } from "@/lib/report";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  callVolume?: string;
};

const DEFAULT_SOURCE = "Skadi Website Contact Form";
const DEMO_SOURCE = "Skadi Demo Page";

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
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const source = body.source?.trim() || DEFAULT_SOURCE;
  const isDemoLead = source === DEMO_SOURCE;
  const callVolume = body.callVolume?.trim() ?? "";

  let firstName = body.firstName?.trim() ?? "";
  let lastName = body.lastName?.trim() ?? "";

  if ((!firstName || !lastName) && body.name?.trim()) {
    const split = splitName(body.name);
    if (!firstName) firstName = split.firstName;
    if (!lastName) lastName = split.lastName;
  }

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (!phone) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (isDemoLead && !callVolume) {
    return NextResponse.json(
      { error: "Please select your inbound call volume." },
      { status: 400 },
    );
  }

  if (isDemoLead && !isValidCallVolume(callVolume)) {
    return NextResponse.json(
      { error: "Please select your inbound call volume." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 },
    );
  }

  try {
    await submitLeadToCrm({
      firstName,
      lastName,
      email,
      phone,
      source,
      callVolume: isDemoLead ? callVolume : undefined,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 502 },
    );
  }
}
