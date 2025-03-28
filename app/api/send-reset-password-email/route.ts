import { ResetPasswordTemplate } from "@/components/EmailTemplates/reset-email";
import { Resend } from "resend";
import { NextResponse } from "next/server";
const resent = new Resend(process.env.Resend_API_KEY || "");

export async function POST(request: Request) {
  const { email, firstName, resetUrl } = await request.json();
  try {
    const { error } = await resent.emails.send({
      from: "molVisonary <support@resend.dev>",
      to: [email],
      subject: "Reset Password",
      react: await ResetPasswordTemplate({ firstName, resetUrl }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
