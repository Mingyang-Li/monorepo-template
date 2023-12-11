import { Type } from 'class-transformer';
import { Min } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserFindManyArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field({ nullable: true })
  @Type()
  @Min(1)
  take?: number;

  @Field({ nullable: true })
  @Type(() => Number)
  skip?: number;
}
