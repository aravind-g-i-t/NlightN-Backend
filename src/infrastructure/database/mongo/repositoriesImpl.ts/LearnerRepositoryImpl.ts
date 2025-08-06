import { ILearnerRopository } from '@domain/interfaces/ILearnerRepository';
import { LearnerModel } from '../models/LearnerModel';
import { Learner } from '@domain/entities/Learner';
import { UserSignupDTO } from '@application/dtos/UserSignupDTO';

export class LearnerRepositoryImpl implements ILearnerRopository {
  async findByEmail(email: string): Promise<Learner | null> {
    const doc = await LearnerModel.findOne({ email });
    return doc ? doc.toObject() as Learner : null;
  }

  async createLearner(signupInput: UserSignupDTO): Promise<Learner> {
    const doc = new LearnerModel(signupInput);
    await doc.save();
    return doc.toObject() as Learner;
  }

}
