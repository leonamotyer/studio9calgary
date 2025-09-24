import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  contactEmailTemplate,
  confirmationEmailTemplate,
  ContactFormData,
} from './emailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message }: ContactFormData = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name,
      email,
      phone: phone || '',
      subject,
      message,
    };

    // Send email to Studio 9
    const studioEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@studio9.com',
      to: [process.env.TO_EMAIL || 'bonavista@studio9.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: contactEmailTemplate(formData),
    });

    // Send confirmation email to the user
    const confirmationResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@studio9.com',
      to: [email],
      subject: 'Thank you for contacting Studio 9!',
      html: confirmationEmailTemplate(formData),
    });

    if (studioEmailResult.error || confirmationResult.error) {
      console.error('Email sending error:', {
        studio: studioEmailResult.error,
        confirmation: confirmationResult.error,
      });

      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        studioEmailId: studioEmailResult.data?.id,
        confirmationEmailId: confirmationResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
