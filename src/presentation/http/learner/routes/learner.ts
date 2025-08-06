import express from "express";
import { learnerSendSignupOTPContorller } from "setup/container/learner/LearnerSendSignupOTPController";

const router=express.Router();

router.post("/signup/send-otp",(req,res)=>{
    console.log("✅ Reached signup/send-otp route");
    
    learnerSendSignupOTPContorller.handle(req,res)
});




export default router;