import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, serviceType, message } = body;

        // FormSubmit.co Integration
        // This sends the email securely without backend configuration
        // NOTE: The first submission will trigger an activation email to adobesoul22@gmail.com
        const response = await fetch("https://formsubmit.co/ajax/adobesoul22@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: `New Inquiry: ${serviceType} (${name})`,
                _template: "table",
                _captcha: "false", // Disable captcha for cleaner flow since we handle UI separately
                name,
                email,
                service: serviceType,
                message,
                _autoresponse: "Thank you for reaching out to Soul Photography. Abin will review your inquiry and get back to you shortly."
            })
        });

        if (!response.ok) {
            console.error("FormSubmit Error:", await response.text());
            throw new Error("Email service failed to accept the inquiry");
        }

        return NextResponse.json({
            success: true,
            message: "Inquiry successfully processed and sent to Abin."
        });
    } catch (error) {
        console.error("Inquiry logging failed:", error);
        return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
    }
}
