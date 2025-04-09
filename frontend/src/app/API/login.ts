// Frontend - /API

// login.ts
export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Login successful" });
  }
}

/* login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Authenticate user logic
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
  */