import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (req.method === 'POST') {
    if (email === 'oji' && password === 'pass') {
      return res.status(200).json({
        status: 200,
        message: 'login bang',
      });
    }
    return res.status(401).json({
      status: 401,
      message: 'gak bang',
    });
  }
}
