# Email Setup Instructions

## Resend API Configuration

To enable the contact form functionality, you need to set up the Resend API:

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the API key

### 2. Create Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=noreply@studio9.com
CONTACT_DEFAULT_TO=bonavista@studio9.com
```

**Important:** Replace `your_resend_api_key_here` with your actual Resend API key.

### 3. Domain Setup (Optional but Recommended)

For production use, you should:

1. Add your domain to Resend
2. Verify your domain
3. Update the `FROM_EMAIL` and `CONTACT_DEFAULT_TO` to use your verified domain (e.g., `noreply@yourdomain.com` and `contact@yourdomain.com`)

### 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the contact form
4. Check that:
   - You receive a confirmation email
   - Studio 9 receives the contact form submission

## Features

- **Contact Form Submission**: Sends form data to Studio 9
- **Confirmation Email**: Automatically sends a confirmation to the user
- **Professional Email Templates**: Branded HTML email templates
- **Form Validation**: Client and server-side validation
- **Error Handling**: Graceful error handling with user feedback

## Email Templates

The system includes two email templates:

1. **Contact Email**: Sent to Studio 9 with the form submission details
2. **Confirmation Email**: Sent to the user confirming their message was received

Both templates are professionally designed and match the Studio 9 branding.
