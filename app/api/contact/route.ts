import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Lazy init to avoid build-time error when env var is not set
const getResend = () => new Resend(process.env.RESEND_API_KEY!);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  activity: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  let data;
  try {
    const body = await req.json();
    data = schema.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const { error } = await getResend().emails.send({
    from: "Auressia <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    subject: `Nouveau contact — ${data.name} (${data.activity})`,
    html: `
      <h2>Nouveau message depuis auressia.fr</h2>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Activité :</strong> ${data.activity}</p>
      <p><strong>Message :</strong></p>
      <p>${data.message}</p>
    `,
    replyTo: data.email,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
