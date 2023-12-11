import { User } from '@/models/user';
import { Mutation, Query, Resolver } from 'type-graphql';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  public async findOneUser(): Promise<User> {
    return;
  }

  @Query(() => [User])
  public async findManyUsers(): Promise<User> {
    return;
  }

  @Mutation(() => User)
  public async createUser(): Promise<User> {
    return;
  }

  @Mutation(() => User)
  public async updateUser(): Promise<User> {
    return;
  }
}
