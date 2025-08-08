import { ICacheService } from "@domain/interfaces/ICacheService";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";
import { IEmailService } from "@domain/interfaces/IEmailService";
import { ISMSService } from "@domain/interfaces/ISMSService";

export class OTPServiceImpl implements IOTPService {
  constructor(
    private emailService: IEmailService,
    private smsService: ISMSService,
    private cacheService: ICacheService
  ) {}

  async generateOTP(): Promise<string> {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async sendOTP(identifier: string, type: OTPIdentifierType, otp: string): Promise<void> {
    const cacheKey = `otp:${type}:${identifier}`;

    try {
      await this.cacheService.set(cacheKey, otp, 120);

      const message = `Your OTP to verify your ${type} in NlightN is ${otp}`;

      if (type === 'email') {
        await this.emailService.send(identifier, "OTP Verification", otp);
      } else {
        await this.smsService.send(identifier, message);
      }

    } catch (error) {
      console.error(`Failed to send OTP to ${identifier}:`, error);
      throw new Error("Failed to send OTP. Please try again.");
    }
  }

  async deleteOTP(identifier: string, type: OTPIdentifierType): Promise<void> {
    const cacheKey = `otp:${type}:${identifier}`;
    try {
      await this.cacheService.delete(cacheKey);
    } catch (error) {
      console.error(`Failed to delete OTP for ${identifier}:`, error);
      
    }
  }
}
