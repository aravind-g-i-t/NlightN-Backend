import { SendSignupOTP } from "@application/useCases/learner/SendSignupOTP";
import { learnerRepository } from "./learnerRepository";
import { otpService } from "../shared/otpService";
import { cacheService } from "@setup/redisClient";
import { bcryptHashService } from "../shared/bcryptHashService";

const sendSignupOTPUseCase= new SendSignupOTP(learnerRepository,otpService,cacheService,bcryptHashService);

export {sendSignupOTPUseCase}