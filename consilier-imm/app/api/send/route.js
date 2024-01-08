import { Resend } from "resend"

const resend = new Resend('re_4nZhaY97_6MiSAMTsmaAE8W6SVPFw9N2z');

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("body: ", body);
        const {firstName, lastName, email, phoneNumber} = body;

        const data = await resend.emails.send({
            from: 'Titi <savola1205@yahoo.com>',
            to: ['danutzviola40@gmail.com'],
            subject: 'Salutare',
            react: <div>Hello Ranete</div>,
        });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
}