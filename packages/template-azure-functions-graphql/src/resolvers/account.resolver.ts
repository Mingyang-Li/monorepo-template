import { Account } from '@/models/account';
import { Mutation, Query, Resolver } from 'type-graphql';

@Resolver(() => Account)
export class AccountResolver {
  @Query(() => Account)
  public async findOneAccount(): Promise<Account> {
    return;
  }

  @Query(() => [Account])
  public async findManyAccounts(): Promise<Account> {
    return;
  }

  @Mutation(() => Account)
  public async createAccount(): Promise<Account> {
    return;
  }

  @Mutation(() => Account)
  public async updateAccount(): Promise<Account> {
    return;
  }
}
