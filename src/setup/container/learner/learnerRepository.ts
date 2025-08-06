import { LearnerRepositoryImpl } from "@infrastructure/database/mongo/repositoriesImpl.ts/LearnerRepositoryImpl";
import { ILearnerRopository } from "@domain/interfaces/ILearnerRepository";

const learnerRepository:ILearnerRopository=new LearnerRepositoryImpl();

export {learnerRepository}