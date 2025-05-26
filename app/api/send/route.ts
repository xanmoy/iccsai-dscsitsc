// app/api/send/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'Your Name <onboarding@resend.dev>',
            to: ['xanmoy.tsx@gmail.com'],
            subject: body.subject,
            replyTo: body.email,
            html: `<p><strong>From:</strong> ${body.firstName} ${body.lastName} (${body.email})</p><p>${body.message}</p>`,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
