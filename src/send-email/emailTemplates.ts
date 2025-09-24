export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const contactEmailTemplate = (data: ContactFormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #1e293b; color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Studio 9</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1e293b; margin-top: 0; font-size: 24px;">Contact Details</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0;"><strong style="color: #2563eb;">Name:</strong> ${data.name}</p>
          <p style="margin: 0 0 10px 0;"><strong style="color: #2563eb;">Email:</strong> ${data.email}</p>
          <p style="margin: 0 0 10px 0;"><strong style="color: #2563eb;">Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p style="margin: 0;"><strong style="color: #2563eb;">Subject:</strong> ${data.subject}</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
          <p style="margin: 0; line-height: 1.6; color: #334155;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px; margin: 0;">
            This message was sent from the Studio 9 contact form.
          </p>
        </div>
      </div>
    </div>
  `;
};

export const confirmationEmailTemplate = (data: ContactFormData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #1e293b; color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Studio 9</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank You for Contacting Us!</p>
      </div>
      
      <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #1e293b; margin-top: 0;">Hello ${data.name}!</h2>
        
        <p style="color: #334155; line-height: 1.6;">
          Thank you for reaching out to Studio 9! We have received your message and will get back to you as soon as possible.
        </p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Your Message Summary</h3>
          <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
          <p style="margin: 0; line-height: 1.6;">${data.message}</p>
        </div>
        
        <div style="background: #2563eb; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">What's Next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>We'll review your message within 24 hours</li>
            <li>Our team will respond via email or phone</li>
            <li>If you have urgent questions, call us at (403) 271-2066</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px; margin: 0;">
            Studio 9 Music School<br>
            Phone: (403) 271-2066<br>
            Email: bonavista@studio9.com
          </p>
        </div>
      </div>
    </div>
  `;
};
