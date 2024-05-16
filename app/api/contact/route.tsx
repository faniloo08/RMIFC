import { NextRequest, NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    const nodemailer = require("nodemailer");
    try {
        // Analyse du corps de la requête pour obtenir les données du formulaire
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const topic = formData.get('topic') as string;
        const message = formData.get('message') as string;

        // Configuration de Nodemailer avec Gmail
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
            }
        });

        // Envoi de l'e-mail
        const mail = await transporter.sendMail({
            from: email, // L'e-mail de l'utilisateur
            to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
            replyTo: email,
            subject: `Message from ${name} - ${topic}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Topic: ${topic}</p>
                <p>Message: ${message}</p>
            `,
        });

        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
