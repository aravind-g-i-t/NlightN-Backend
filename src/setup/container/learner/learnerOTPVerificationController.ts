import { LearnerOTPVerificationController } from "@presentation/http/learner/controllers/learner/LearnerOTPVerificationController";
import { learnerOTPVerificationUseCase } from "./learnerOTPVerificationUseCase";

const learnerOTPVerificationController=new LearnerOTPVerificationController(learnerOTPVerificationUseCase);

export {learnerOTPVerificationController}