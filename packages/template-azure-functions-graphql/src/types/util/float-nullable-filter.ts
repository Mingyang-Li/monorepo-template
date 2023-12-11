import { Field, InputType, Float } from 'type-graphql';
import { Type } from 'class-transformer';

@InputType()
export class FloatNullableFilter {
  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number | null;

  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[] | null;

  @Field(() => [Float], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[] | null;

  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;

  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

  @Field(() => Float, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}
