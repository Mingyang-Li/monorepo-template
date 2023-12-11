import { Field, ObjectType } from 'type-graphql';
import { Account } from './account';

@ObjectType()
export class Transaction {
  // System fields
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  archived?: boolean;

  @Field({ nullable: true })
  archivedAt?: Date;

  @Field({ nullable: true })
  archiveReason?: string;

  // Custom fields
  @Field({ nullable: true })
  amount?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  status?: string;

  // Relation - Account
  @Field({ nullable: true })
  fromAccountId?: string;

  @Field(() => Account, { nullable: true })
  fromAccount?: Account;

  // Relation - Account
  @Field({ nullable: true })
  toAccountId?: string;

  @Field(() => Account, { nullable: true })
  toAccount?: Account;

  @Field({ nullable: true })
  type?: string;
}
