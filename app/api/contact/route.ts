// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 },
      );
    }

    const {
      fullName,
      email,
      phone,
      subject,
      message,
    }: {
      fullName: string;
      email: string;
      phone?: string;
      subject?: string;
      message: string;
    } = body;

    // Validation
    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 },
      );
    }

    // Environment variables check
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error("Missing email environment variables");

      return NextResponse.json(
        {
          success: false,
          message: "Email service configuration is missing.",
        },
        { status: 500 },
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Website Contact Form" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Contact Form - ${subject?.trim() || "General Inquiry"}`,

      html: `
      <div style="max-width:650px;margin:auto;font-family:Arial,Helvetica,sans-serif;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        
        <div style="background:#1E3872;padding:20px;text-align:center;color:white;">
          <h2 style="margin:0;">New Contact Form Submission</h2>
        </div>

        <div style="padding:24px;color:#374151;line-height:1.6;">
          
          <table width="100%" cellpadding="8" cellspacing="0">
            <tr>
              <td width="150"><strong>Full Name</strong></td>
              <td>${escapeHtml(fullName)}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${escapeHtml(email)}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${escapeHtml(phone || "N/A")}</td>
            </tr>

            <tr>
              <td><strong>Subject</strong></td>
              <td>${escapeHtml(subject || "N/A")}</td>
            </tr>
          </table>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;" />

          <h3 style="margin-bottom:10px;">Message</h3>

          <div
            style="
              background:#f9fafb;
              border:1px solid #e5e7eb;
              border-radius:6px;
              padding:16px;
              white-space:pre-wrap;
            "
          >
            ${escapeHtml(message)}
          </div>

        </div>

        <div
          style="
            background:#f3f4f6;
            padding:15px;
            text-align:center;
            font-size:12px;
            color:#6b7280;
          "
        >
          This email was generated automatically from the website contact form.
        </div>

      </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
        error:
          process.env.NODE_ENV === "development" ? error?.message : undefined,
      },
      { status: 500 },
    );
  }
}
