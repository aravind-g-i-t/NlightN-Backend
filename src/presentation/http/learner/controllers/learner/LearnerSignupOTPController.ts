import { Request, Response } from 'express';
import { SendSignupOTP } from "@application/useCases/learner/SendSignupOTP";

export class LearnerSignupOTPController {
  constructor(private sendSignupOTP: SendSignupOTP) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      await this.sendSignupOTP.execute(req.body);
      res.status(200).json({ success: true, message: "OTP has been sent to your email" });
    } catch (error: unknown) {
      console.error("LearnerSignupOTPController error:", error);

      const message = error instanceof Error ? error.message : "Failed to send OTP";
      res.status(400).json({ success: false, message });
    }
  }
}
