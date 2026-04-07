import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, comentarios } = await req.json();

    if (!nombre || !empresa || !email || !comentarios) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "NivelaHR Web <info@nivelahr.com>",
      to: ["nivelahr@outlook.com"],
      replyTo: email,
      subject: `Nuevo contacto desde la web: ${nombre} (${empresa})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A3FD8;">Nuevo mensaje desde NivelaHR.com</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4A4578; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; color: #1A1640;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4A4578;">Empresa</td>
              <td style="padding: 8px 0; color: #1A1640;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4A4578;">Email</td>
              <td style="padding: 8px 0; color: #1A1640;">
                <a href="mailto:${email}" style="color: #4A3FD8;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4A4578; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0; color: #1A1640; white-space: pre-wrap;">${comentarios}</td>
            </tr>
          </table>
          <hr style="margin-top: 24px; border-color: #EDE9FF;" />
          <p style="font-size: 12px; color: #8A86B0;">Enviado desde el formulario de contacto de nivelahr.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intentá de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Error inesperado del servidor." },
      { status: 500 }
    );
  }
}
