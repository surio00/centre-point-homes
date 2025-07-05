// Simple contact form handler for Vercel
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      console.log('📧 Contact form submission:', req.body);
      
      const { firstName, lastName, email, phone, service, message } = req.body;
      
      // Basic validation
      if (!firstName || !lastName || !email || !service || !message) {
        return res.status(400).json({
          success: false,
          message: "Please fill in all required fields"
        });
      }
      
      if (!email.includes('@')) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address"
        });
      }

      // Log the submission
      console.log('✅ Contact form success:', {
        name: `${firstName} ${lastName}`,
        email: email,
        service: service,
        timestamp: new Date().toISOString()
      });

      // Return success
      return res.status(201).json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        id: Date.now() // Simple ID based on timestamp
      });

    } catch (error) {
      console.error('❌ Contact form error:', error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  }

  // Method not allowed
  return res.status(405).json({ 
    success: false, 
    message: 'Method not allowed' 
  });
}