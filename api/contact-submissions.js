// Simple submissions viewer for Vercel
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      message: "Contact submissions are logged in Vercel function logs",
      note: "Check your Vercel dashboard > Functions > View Function Logs",
      timestamp: new Date().toISOString()
    });
  }

  // Method not allowed
  return res.status(405).json({ 
    message: 'Method not allowed' 
  });
}