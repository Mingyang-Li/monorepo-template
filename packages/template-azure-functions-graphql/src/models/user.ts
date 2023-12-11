import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
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
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  preferredName?: string;

  @Field({ nullable: true })
  email?: string;
}
