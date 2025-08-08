import { UserSignupDTO } from "@application/dtos/UserSignupDTO";
import { Instructor } from "@domain/entities/Instructor";

export interface IInstructorRepository{
    createInstructor(learner:UserSignupDTO):Promise<Instructor>;
    findByEmail(email:string):Promise<Instructor | null>;
}