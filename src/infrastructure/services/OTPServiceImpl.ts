import { ICacheService } from "@domain/interfaces/ICacheService";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";
import { IEmailService } from "@domain/interfaces/IEmailService";
import { ISMSService } from "@domain/interfaces/ISMSService";

export class OTPServiceImpl implements IOTPService{
    constructor(
        private emailService: IEmailService,
        private smsService: ISMSService,
        private cacheService: ICacheService,
) {}


    async generateOTP(): Promise<string> {
        console.log('entered generate otp');
        return Math.floor(100000+Math.random()*900000).toString();
    }

    async sendOTP(identifier: string, type: OTPIdentifierType, otp: string): Promise<void> {
        console.log('entered send otp');
        const cacheKey=`otp:${type}:${identifier}`;
        console.log(cacheKey);
        console.log(this.cacheService);
        
        await this.cacheService.set(cacheKey,otp,600)

        const message=`Your OTP verify your email in NlightN is ${otp}`;
        if(type==='email'){
            await this.emailService.send(identifier,"OTP Verification",message)
        }else{
            await this.smsService.send(identifier,message)
        }
    }

    async deleteOTP(identifier: string, type: OTPIdentifierType): Promise<void> {
        await this.cacheService.delete(`otp.${type}:${identifier}`)
    }
}