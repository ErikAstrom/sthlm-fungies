import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: any,
  error: any
}
const discordHookUrl = 'https://discord.com/api/webhooks/1097181816210849924/xmXHpjd9FL69032oX3RAH_WA142GuaHEAtkLYYOlcMXiQvkDIvgKLreyljcJdNm3R1QF';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, message, subject, email } = req.body;

  const payload = {
    content: `**${subject}**\n\n Från: ${name}\n\ Kontaktuppgifter: ${email} \n\ ${message}`,
  };

  try {
    await fetch(discordHookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    res.status(200).json({ success: true, error: null });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Unable to send message to Discord webhook' });
  }
}