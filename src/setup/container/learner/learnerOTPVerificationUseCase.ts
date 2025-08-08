import { LearnerOTPVerificationUseCase } from "@application/useCases/learner/LearnerOTPVerificationUseCase";
import { cacheService } from "@setup/redisClient";
import { learnerRepository } from "./learnerRepository";

const learnerOTPVerificationUseCase=new LearnerOTPVerificationUseCase(cacheService,learnerRepository)

export {learnerOTPVerificationUseCase}