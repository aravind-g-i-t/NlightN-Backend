import { OTPServiceImpl } from "@infrastructure/services/OTPServiceImpl";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { cacheService } from "../../redisClient";
import { emailService } from "./emailService";
import { smsService } from "./smsService";

const otpService:IOTPService= new OTPServiceImpl(emailService,smsService,cacheService)

export {otpService}