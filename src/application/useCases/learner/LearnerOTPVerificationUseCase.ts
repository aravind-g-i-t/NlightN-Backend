import { ICacheService } from "@domain/interfaces/ICacheService";
import { ILearnerRopository } from "@domain/interfaces/ILearnerRepository";
import { Learner } from "@domain/entities/Learner";
import { UserSignupDTO } from "@application/dtos/UserSignupDTO";

export class LearnerOTPVerificationUseCase {
  constructor(
    private cacheService: ICacheService,
    private learnerRepository: ILearnerRopository,
    
  ) {}

  async execute(email: string, otp: string): Promise<void> {
    console.log('entered usecase');
    const user = await this.cacheService.get<UserSignupDTO>(`signup:${email}`);
    console.log('signupData',user);
    const userOTP = await this.cacheService.get<string>(`otp:email:${email}`);
    console.log('userOTP',userOTP);
    
    if (!userOTP) {
      throw new Error("OTP has expired");
    }

    if (userOTP !== otp) {
      throw new Error("OTP does not match");
    }

    if (!user) {
      throw new Error("Process time-out");
    }

    const userCreated:Learner = await this.learnerRepository.createLearner(user);
    console.log('userCreated',userCreated);
    

    if (!userCreated) {
      throw new Error("User not created");
    }

    return ;
  }
}
