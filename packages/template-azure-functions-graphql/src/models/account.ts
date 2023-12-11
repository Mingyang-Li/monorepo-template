import { Field, ObjectType } from 'type-graphql';
import { User } from './user';

@ObjectType()
export class Account {
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
  currentAmount?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  type?: string;

  // Relation - Transaction[], any transactions involving the ID of this account
  @Field(() => [String], { nullable: true })
  transactions?: string[];

  // Relation - User
  @Field({ nullable: true })
  ownerId?: string;

  @Field(() => User, { nullable: true })
  owner?: User;
}
