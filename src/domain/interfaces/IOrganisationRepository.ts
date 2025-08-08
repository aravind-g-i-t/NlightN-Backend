import { OrgSignupDTO } from "@application/dtos/OrgSignupDTO";
import { Organisation } from "@domain/entities/Organisation";

export interface IOrganisationRepository{
    createOrganisation(learner:OrgSignupDTO):Promise<Organisation>;
    findByEmail(email:string):Promise<Organisation | null>;
}