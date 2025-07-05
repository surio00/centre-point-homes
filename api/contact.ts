import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// In-memory storage for this serverless function
let submissions: any[] = [];

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      console.log('📧 Contact form data received:', req.body);
      
      // Validate the form data
      const validatedData = contactSchema.parse(req.body);
      
      // Create submission with ID and timestamp
      const submission = {
        ...validatedData,
        id: submissions.length + 1,
        createdAt: new Date().toISOString(),
        timestamp: Date.now()
      };

      // Store the submission
      submissions.push(submission);
      
      console.log('✅ Contact form submission stored:', {
        id: submission.id,
        name: `${submission.firstName} ${submission.lastName}`,
        email: submission.email,
        service: submission.service
      });

      // Return success response
      res.status(201).json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        id: submission.id
      });

    } catch (error) {
      console.error('❌ Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request"
        });
      }
    }
  } else if (req.method === 'GET') {
    // Return all submissions (for admin/debug purposes)
    res.status(200).json(submissions.reverse()); // Most recent first
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}