import { Field, InputType } from 'type-graphql';
import { BooleanFilter } from '../util/boolean-filter';
import { StringFilter } from '../util/string-filter';

@InputType()
export class UserWhereInput {
  // System fields
  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => BooleanFilter, { nullable: true })
  archived?: BooleanFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  archiveReason?: StringFilter;

  // custom fields
  @Field(() => StringFilter, { nullable: true })
  preferredName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  firstName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  lastName?: StringFilter;

  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;
}
