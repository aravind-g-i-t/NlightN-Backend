import express from "express";

import { learnerSendSignupOTPContorller } from "@setup/container/learner/LearnerSendSignupOTPController";
import { learnerOTPVerificationController } from "@setup/container/learner/learnerOTPVerificationController";

const router=express.Router();

router.post("/signup/send-otp",(req,res)=>learnerSendSignupOTPContorller.handle(req,res));

router.post("/signup/verify-otp",(req,res)=>learnerOTPVerificationController.handle(req,res))



export default router;