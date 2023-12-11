import { Transaction } from '@/models/transaction';
import { Mutation, Query, Resolver } from 'type-graphql';

@Resolver(() => Transaction)
export class TransactionResolver {
  @Query(() => Transaction)
  public async findOneTransaction(): Promise<Transaction> {
    return;
  }

  @Query(() => [Transaction])
  public async findManyTransactions(): Promise<Transaction> {
    return;
  }

  @Mutation(() => Transaction)
  public async createTransaction(): Promise<Transaction> {
    return;
  }

  @Mutation(() => Transaction)
  public async updateTransaction(): Promise<Transaction> {
    return;
  }
}
