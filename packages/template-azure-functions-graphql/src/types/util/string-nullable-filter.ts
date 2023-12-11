import { Field, InputType } from 'type-graphql';
import { Type } from 'class-transformer';

@InputType()
export class StringNullableFilter {
  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  equals?: string | null;

  @Field(() => [String], {
    nullable: true,
  })
  @Type(() => String)
  in?: string[] | null;

  @Field(() => [String], {
    nullable: true,
  })
  @Type(() => String)
  notIn?: string[] | null;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  lt?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  lte?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  gt?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  gte?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  contains?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  startsWith?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  endsWith?: string;

  @Field(() => String, {
    nullable: true,
  })
  @Type(() => String)
  not?: string;
}
