import { Resend } from "resend";

const TO_ADDRESS = process.env.CONTACT_TO || "jmandelmvp@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const { RESEND_API_KEY, RESEND_FROM } = process.env;

  if (!RESEND_API_KEY) {
    return res.status(500).json({
      error: "Email is not configured yet. Set the RESEND_API_KEY environment variable.",
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  const subject = `🚨 NEW LEAD: ${name} needs help with ${service || "tech support"}`;

  const text = [
    "You have a new lead from the Gateway Tech website!",
    "",
    `Name:    ${name}`,
    `Phone:   ${phone || "(not provided)"}`,
    `Email:   ${email}`,
    `Service: ${service || "(not specified)"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #1f2937;">
      <h2 style="color: #2563eb; margin-bottom: 4px;">🚨 New Gateway Tech Lead</h2>
      <p style="margin-top:0; color:#6b7280;">Someone just reached out through your website.</p>
      <table style="border-collapse: collapse; margin: 12px 0;">
        <tr><td style="padding:4px 12px 4px 0; font-weight:bold;">Name</td><td>${name}</td></tr>
        <tr><td style="padding:4px 12px 4px 0; font-weight:bold;">Phone</td><td>${phone || "(not provided)"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0; font-weight:bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0; font-weight:bold;">Service</td><td>${service || "(not specified)"}</td></tr>
      </table>
      <p style="font-weight:bold; margin-bottom:4px;">Message:</p>
      <p style="white-space: pre-wrap; background:#f3f4f6; padding:12px; border-radius:8px;">${message}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM || "Gateway Tech Website <onboarding@resend.dev>",
      to: TO_ADDRESS,
      replyTo: email,
      subject,
      text,
      html,
      headers: {
        "X-Priority": "1 (Highest)",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Sorry, something went wrong sending your message. Please try again or call us." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ error: "Sorry, something went wrong sending your message. Please try again or call us." });
  }
}
