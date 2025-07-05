// Simple test endpoint to verify Vercel functions work
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  return res.status(200).json({
    success: true,
    message: "Vercel API functions are working!",
    timestamp: new Date().toISOString(),
    method: req.method
  });
}