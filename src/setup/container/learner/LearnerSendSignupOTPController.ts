import { LearnerSignupOTPController } from "@presentation/http/learner/controllers/learner/LearnerSignupOTPController";

import { sendSignupOTPUseCase } from "./sendSignupOtpUseCase";

const learnerSendSignupOTPContorller=new LearnerSignupOTPController(sendSignupOTPUseCase);

export {learnerSendSignupOTPContorller}