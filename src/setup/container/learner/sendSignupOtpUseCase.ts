import { SendSignupOTP } from "@application/useCases/learner/SendSignupOTP";
import { learnerRepository } from "./learnerRepository";
import { otpService } from "../shared/otpService";
import { cacheService } from "@setup/redisClient";

const sendSignupOTPUseCase= new SendSignupOTP(learnerRepository,otpService,cacheService);

export {sendSignupOTPUseCase}