import { Field, InputType } from 'type-graphql';
import { Type } from 'class-transformer';

@InputType()
export class BooleanFilter {
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  equals?: boolean;

  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  not?: boolean;
}
