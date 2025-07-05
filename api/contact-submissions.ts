import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    // Return a simple message since we can't share data between serverless functions easily
    res.status(200).json({
      message: "Contact submissions are logged in the main contact endpoint",
      note: "Check Vercel function logs for submission details",
      submissions: []
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}