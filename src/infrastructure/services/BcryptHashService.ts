import { IHashService } from '@domain/interfaces/IHashService';
import bcrypt from 'bcrypt';

export class BcryptHashService implements IHashService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(raw: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(raw, hashed);
  }
}