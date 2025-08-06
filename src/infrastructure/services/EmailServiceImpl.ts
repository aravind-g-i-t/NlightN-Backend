// EmailServiceImpl.ts
import nodemailer from 'nodemailer'
import { IEmailService } from '@domain/interfaces/IEmailService';

export class EmailServiceImpl implements IEmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NLIGHTN_EMAIL,
      pass: process.env.NLIGHTN_EMAIL_PASS
    }
  });

  

  async send(to: string, subject: string, body: string): Promise<void> {
  //   console.log(process.env.NLIGHTN_EMAIL,process.env.NLIGHTN_EMAIL_PASS);
  //   console.log(this.transporter);
    
  //   await this.transporter.sendMail({
  //     from: process.env.NLIGHTN_EMAIL,
  //     to,
  //     subject,
  //     text: body,
  //     html:`<>${body}</>`
  //   });

    return new Promise((resolve,reject)=>{
        const transpailer=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.NLIGHTN_EMAIL,
                pass:process.env.NLIGHTN_EMAIL_PASS

            }
        });

            
        let mailOption={
                from:process.env.NLIGHTN_EMAIL,
                to:to,
                subject:"Welcome to NlightN ",
                html:
                `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <p>Thank you for using <strong> NlightN</strong>.</p>
                <p>Your OTP  is:</p>
                <p style="font-size: 1.5rem; font-weight: bold; color: red;">${body}</p>
                <p> Please do not share it with anyone.</p>
                <p>If you did not request this code, please contact our support team immediately.</p>
                <p>Best regards,<br>NlightN Team</p>
              </div>
            `}
        
        transpailer.sendMail(mailOption,(err,info)=>{
            if (err) {
                console.log("error from sending mail ",err);
                reject(err);
                return; 
                
                
            }
            // console.log("mail sent",info.response);
            resolve();

        });

    });

  }

}
