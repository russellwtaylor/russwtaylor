import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();

		const msg = {
			to: process.env.YOUR_EMAIL_ADDRESS!, // Your email address
			from: {
				email: process.env.VERIFIED_SENDER_EMAIL!,
				name: "russwtaylor.com Contact Form",
			}, // Your verified sender email in SendGrid
			subject: `New Contact Form Message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
		};

		await sgMail.send(msg);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
