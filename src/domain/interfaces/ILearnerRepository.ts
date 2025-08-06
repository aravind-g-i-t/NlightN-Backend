import { UserSignupDTO } from "@application/dtos/UserSignupDTO";
import { Learner } from "@domain/entities/Learner";

export interface ILearnerRopository{
    createLearner(learner:UserSignupDTO):Promise<Learner>;
    findByEmail(email:string):Promise<Learner | null>;
    
}