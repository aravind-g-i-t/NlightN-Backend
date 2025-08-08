import { ILearnerRopository } from '@domain/interfaces/ILearnerRepository';
import { LearnerModel } from '../models/LearnerModel';
import { Learner } from '@domain/entities/Learner';
import { UserSignupDTO } from '@application/dtos/UserSignupDTO';

export class LearnerRepositoryImpl implements ILearnerRopository {
  async findByEmail(email: string): Promise<Learner | null> {
    const doc = await LearnerModel.findOne({ email });
    return doc ? this.mapToEntity(doc) : null;
  }

  async createLearner(signupInput: UserSignupDTO): Promise<Learner> {
    try {
      console.log('entered createLearner');
    
      const doc = new LearnerModel(signupInput);
      console.log(doc);
      
      await doc.save();
      console.log(doc);
      
      return this.mapToEntity(doc);
    } catch (error) {
      console.error('Error in createLearner:',error);
      throw new Error('Error in createLearner');
    }
  }

  private mapToEntity(doc: any): Learner {
    return new Learner(
      doc._id.toString(),
      doc.firstName,
      doc.lastName,
      doc.email,
      doc.phone,
      doc.hashedPassword,
      doc.isActive,
      doc.joiningDate,
      doc.imageURL
    );
  }
}
