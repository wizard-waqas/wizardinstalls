import axios from 'axios';
import { NextRequest } from 'next/server';

interface SmsRequestBody {
  to: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const { to, message }: SmsRequestBody = await req.json();
    console.log(`Sending SMS to ${to} with message: ${message}`);

    if (!to || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    const username = process.env.CLICKSEND_USERNAME;
    const apiKey = process.env.CLICKSEND_API_KEY;

    if (!username || !apiKey) {
      return new Response(JSON.stringify({ error: 'Missing ClickSend credentials' }), {
        status: 500,
      });
    }

    const response = await axios.post(
      'https://rest.clicksend.com/v3/sms/send',
      {
        messages: [
          {
            source: 'nextjs',
            from: 'WizardCam',
            body: message,
            to: to,
          },
        ],
      },
      {
        auth: {
          username,
          password: apiKey,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return new Response(JSON.stringify({ success: true, data: response.data }), {
      status: 200,
    });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return new Response(JSON.stringify({ error: 'Failed to send SMS' }), {
      status: 500,
    });
  }
}
