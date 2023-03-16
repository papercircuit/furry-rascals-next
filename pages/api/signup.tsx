import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Save the user's information to a database
      // or send an email notification using Nodemailer
      const { name, email } = req.body;
      console.log(`New sign up: ${name} (${email})`);

      res.status(200).json({ message: 'Thank you for signing up!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while signing up.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
