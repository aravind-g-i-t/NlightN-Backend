
import { ISMSService } from '@domain/interfaces/ISMSService';

export class SMSServiceImpl implements ISMSService {
  

  async send(to: string, body: string): Promise<void> {
    console.log("phone:",to,'otp',body)
  }
}
