
import { LearnerOTPVerificationUseCase } from '@application/useCases/learner/LearnerOTPVerificationUseCase';
import {Request,Response} from 'express'


export class LearnerOTPVerificationController{
    constructor(
        private verifyOTP:LearnerOTPVerificationUseCase
    ){}

    async handle(req:Request,res:Response): Promise<void>{
        try{
            console.log('entered controller');
            
            const {email,otp}=req.body;
            console.log(email,otp);
            const response=await this.verifyOTP.execute(email,otp)
            
            res.status(200).json({success:true,message:"User created successfully"})
        }catch(error:unknown){
            res.status(400).json({error:"Failed to send OTP"})
        }
    }
}