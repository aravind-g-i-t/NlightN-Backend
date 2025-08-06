import { UserSignupDTO } from "@application/dtos/UserSignupDTO";
import { ILearnerRopository } from "@domain/interfaces/ILearnerRepository";
import { IOTPService } from "@domain/interfaces/IOTPService";
import { OTPIdentifierType } from "@domain/types/OTPIdentifierType";

export class SignupLearner{
    constructor(
        private learnerRepository:ILearnerRopository,
        private otpService: IOTPService
    ){}
    
    async execute(dto:UserSignupDTO):Promise<void>{
        const {email}=dto;
        const existingEmail=await this.learnerRepository.findByEmail(email);
        if(existingEmail){
            throw new Error('Email is already registered');
        }
        
    }
}