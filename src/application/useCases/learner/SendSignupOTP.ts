import { ILearnerRopository } from "@domain/interfaces/ILearnerRepository";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";
import { UserSignupDTO } from "@application/dtos/UserSignupDTO";
import { ICacheService } from "@domain/interfaces/ICacheService";
import { IHashService } from "@domain/interfaces/IHashService";

export class SendSignupOTP {
  constructor(
    private userRepository: ILearnerRopository,
    private otpService: IOTPService,
    private cacheService: ICacheService,
    private hashService:IHashService
  ) {}

  async execute(signupInput: UserSignupDTO): Promise<void> {
    const { email,password } = signupInput;

    const existingEmail = await this.userRepository.findByEmail(email);
    if (existingEmail) {
      throw new Error("Email is already registered");
    }

    const otp = await this.otpService.generateOTP();

    try {
      await this.otpService.sendOTP(email, 'email', otp);
    } catch (err) {
      throw new Error("Failed to send OTP. Please try again later.");
    }
    signupInput.password=await this.hashService.hash(password)

    const cacheKey = `signup:${email}`;
    await this.cacheService.set(cacheKey, signupInput, 600); 
  }
}
