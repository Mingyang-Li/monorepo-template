import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  public async createUser() {
    return { id: randomUUID(), name: 'Sam', createdAt: new Date() };
  }
}
