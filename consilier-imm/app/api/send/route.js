import { Resend } from "resend"

const resend = new Resend('re_4nZhaY97_6MiSAMTsmaAE8W6SVPFw9N2z');

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body: ", body);
    const { firstName, lastName, email, phoneNumber } = body;
    const data = await resend.emails.send({
      from: 'TEST <onboarding@resend.dev>',
      to: [email],
      subject: 'TEST',
      react: <div>Salut {firstName} {lastName} emailul tau este: {email} si numarul de telefon {phoneNumber}</div>,
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}