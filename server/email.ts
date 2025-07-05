import nodemailer from 'nodemailer';
import { type InsertContactSubmission } from '@shared/schema';

// Email configuration
const EMAIL_CONFIG = {
  // For Gmail (most common)
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
  // For other email providers, uncomment and configure:
  // host: process.env.SMTP_HOST,
  // port: parseInt(process.env.SMTP_PORT || '587'),
  // secure: false, // true for 465, false for other ports
};

// Create transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

export async function sendContactEmail(submission: InsertContactSubmission) {
  try {
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_USER;
    
    if (!recipientEmail) {
      console.error('No recipient email configured');
      return { success: false, error: 'Email not configured' };
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission - ${submission.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${submission.service}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${submission.firstName} ${submission.lastName}
        Email: ${submission.email}
        Phone: ${submission.phone || 'Not provided'}
        Service: ${submission.service}
        Message: ${submission.message}
        
        Submitted at: ${new Date().toLocaleString()}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Test email configuration
export async function testEmailConfig() {
  try {
    await transporter.verify();
    console.log('Email configuration is valid');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
}