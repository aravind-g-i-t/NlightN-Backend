import { ILearnerRopository } from "@domain/interfaces/ILearnerRepository";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";
import { UserSignupDTO } from "@application/dtos/UserSignupDTO";
import { ICacheService } from "@domain/interfaces/ICacheService";

export class SendSignupOTP{
    constructor(
        private userRepository:ILearnerRopository,
        private otpService:IOTPService,
        private cacheService:ICacheService
    ){}

    async execute(signupInput:UserSignupDTO):Promise<void>{
        console.log('entered sendSignupOTP usecase');
        const {email}=signupInput;
        const existingEmail= await this.userRepository.findByEmail(email);
        if (existingEmail) {
            throw new Error("Email is already registered")
        }
        
        const otp=await this.otpService.generateOTP();
        this.otpService.sendOTP(email,'email',otp)
        const cacheKey = `signup:${email}`;
        await this.cacheService.set(cacheKey,signupInput,600);
    }
}