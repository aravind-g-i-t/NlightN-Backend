import {Request,Response} from 'express'
import { SendSignupOTP } from "@application/useCases/learner/SendSignupOTP";

export class LearnerSignupOTPController{
    constructor(private sendSignupOTP:SendSignupOTP){}

    async handle(req:Request,res:Response): Promise<void>{
        try{
            console.log('entered learnerSignupOTPController');
            const role='learner'
            await this.sendSignupOTP.execute({role,...req.body});
            res.status(200).json({success:true,message:"OTP has been sent to your email"})
        }catch(error:unknown){
            res.status(400).json({error:"Failed to send OTP"})
        }
    }
}