import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/** Delivers Contact Us submissions through Resend. The API key stays private in Vercel. */
export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || !name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "Assembly of the Saints Website <onboarding@resend.dev>",
      to: [site.email],
      reply_to: email.trim(),
      subject: `Website message from ${name.trim()}`,
      text: `New message from the church website\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nPhone: ${typeof phone === "string" && phone.trim() ? phone.trim() : "Not provided"}\n\nMessage:\n${message.trim()}`
    })
  });

  if (!emailResponse.ok) return NextResponse.json({ error: "Unable to send email." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
