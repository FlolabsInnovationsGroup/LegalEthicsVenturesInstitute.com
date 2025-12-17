import { NextResponse } from "next/server";

const STRAPI_URL = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

type Incoming = {
  fullName?: string;
  email?: string;
  topic?: string;
  message?: string;
  consent?: boolean;
  sourcePage?: string;
};

const validate = (body: Incoming) => {
  const errors: Record<string, string> = {};
  if (!body.fullName || body.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }
  if (!body.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) {
    errors.email = "Enter a valid email.";
  }
  const allowedTopics = ["General", "Programs", "Partnerships", "Media", "Support"];
  if (!body.topic || !allowedTopics.includes(body.topic)) {
    errors.topic = "Select a valid topic.";
  }
  if (!body.message || body.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  if (!body.consent) {
    errors.consent = "Consent is required.";
  }
  return errors;
};

export async function POST(req: Request) {
  if (!STRAPI_URL || !STRAPI_TOKEN) {
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const body: Incoming = await req.json().catch(() => ({}));
  const errors = validate(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          fullName: body.fullName,
          email: body.email,
          topic: body.topic,
          message: body.message,
          consent: body.consent,
          sourcePage: body.sourcePage || "/contact",
        },
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || "Unable to submit contact form.");
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to submit contact form." },
      { status: 500 },
    );
  }

  // TODO: Add email notification via Strapi email plugin, SendGrid, SES, or webhook.
  return NextResponse.json({ ok: true });
}
