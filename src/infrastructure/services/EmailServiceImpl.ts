import nodemailer from 'nodemailer';
import { IEmailService } from '@domain/interfaces/IEmailService';

export class EmailServiceImpl implements IEmailService {
  
  async send(to: string, subject: string, body: string): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NLIGHTN_EMAIL,
        pass: process.env.NLIGHTN_EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.NLIGHTN_EMAIL,
      to,
      subject: subject || 'Welcome to NlightN',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <p>Thank you for using <strong>NlightN</strong>.</p>
          <p>Your OTP is:</p>
          <p style="font-size: 1.5rem; font-weight: bold; color: red;">${body}</p>
          <p>Please do not share it with anyone.</p>
          <p>If you did not request this code, please contact our support team immediately.</p>
          <p>Best regards,<br>NlightN Team</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('OTP could not be sent. Please try again later.');
    }
  }
}
