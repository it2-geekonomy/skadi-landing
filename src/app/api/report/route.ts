import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { submitLeadToCrm } from "@/lib/crm";
import {
  isValidCallVolume,
  REPORT_PDF_FILENAME,
  REPORT_PDF_URL,
  REPORT_SOURCE,
} from "@/lib/report";
type ReportPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  jobTitle?: string;
  callVolume?: string;
};

async function readReportPdf(): Promise<Buffer> {
  const pdfPath = path.join(
    process.cwd(),
    "public",
    "images",
    REPORT_PDF_FILENAME,
  );
  return readFile(pdfPath);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildReportEmailHtml(firstName: string): string {
  const safeName = escapeHtml(firstName);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Skadi Industry Report</title>
  </head>
  <body style="margin:0;padding:0;background-color:#080e07;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#080e07;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#0c120a;border:1px solid rgba(110,150,79,0.28);border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 20px;background:linear-gradient(180deg, rgba(110,150,79,0.16) 0%, rgba(12,18,10,0) 100%);">
                <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#6e964f;">
                  SKADI
                </p>
                <h1 style="margin:14px 0 0;font-size:28px;line-height:1.25;font-weight:400;color:#ffffff;">
                  Your report is ready
                </h1>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 32px 0;">
                <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#d7ddd2;">
                  Hi ${safeName},
                </p>
                <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#d7ddd2;">
                  Thank you for requesting the Skadi industry report. Your copy is attached to this email.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px;background-color:rgba(110,150,79,0.08);border:1px solid rgba(110,150,79,0.24);border-radius:12px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#abbe9c;">
                        Attached report
                      </p>
                      <p style="margin:0;font-size:18px;line-height:1.4;font-weight:700;color:#ffffff;">
                        The True Cost of a Missed Call
                      </p>
                      <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#a8b0a3;">
                        How service businesses lose revenue from unanswered inbound calls — and what to do about it.
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#d7ddd2;">
                  Inside, you&apos;ll find independent research on missed-call rates, revenue risk by industry, and why AI voice agents are becoming essential for service businesses.
                </p>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 8px;">
                  <tr>
                    <td style="border-radius:999px;background-color:#6e964f;">
                      <a href="https://landing.theskadi.com/demo" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                        Book a Demo
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:18px 0 0;font-size:14px;line-height:1.6;color:#a8b0a3;">
                  Or visit <a href="https://landing.theskadi.com" style="color:#abbe9c;text-decoration:none;">landing.theskadi.com</a> to learn more.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 32px;border-top:1px solid rgba(255,255,255,0.08);">
                <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#ffffff;">
                  — The Skadi Team
                </p>
                <p style="margin:0;font-size:13px;line-height:1.6;color:#8f9689;">
                  <a href="mailto:connect@theskadi.com" style="color:#abbe9c;text-decoration:none;">connect@theskadi.com</a>
                </p>
              </td>
            </tr>
          </table>

          <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#6f756b;max-width:600px;text-align:center;">
            You received this email because you requested the Skadi industry report.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Skadi <noreply@theskadi.com>";

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }
  let body: ReportPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const jobTitle = body.jobTitle?.trim() ?? "";
  const callVolume = body.callVolume?.trim() ?? "";

  if (!firstName || !lastName || !email || !jobTitle || !callVolume) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (!isValidCallVolume(callVolume)) {
    return NextResponse.json(
      { error: "Please select your inbound call volume" },
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
      phone: "99999999",
      source: REPORT_SOURCE,
      jobTitle,
      callVolume,
    });

    const pdfBuffer = await readReportPdf();    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Skadi Industry Report — The True Cost of Missed Calls",
      html: buildReportEmailHtml(firstName),
      attachments: [
        {
          filename: "True-Cost-Missed-Call-LeadMagnet.pdf",
          content: pdfBuffer,
        },
      ],
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return NextResponse.json(
        { error: "Report saved, but we could not send the email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        pdfUrl: REPORT_PDF_URL,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Report form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 502 },
    );
  }
}