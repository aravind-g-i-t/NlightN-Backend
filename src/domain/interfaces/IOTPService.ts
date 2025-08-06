import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";

export interface IOTPService{
    generateOTP():Promise<string>;
    sendOTP(identifier:string,type:OTPIdentifierType,otp:string):Promise<void>
    deleteOTP(identifier:string,type:OTPIdentifierType):Promise<void>
}