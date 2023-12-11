import { Field, InputType } from 'type-graphql';
import { Type } from 'class-transformer';

@InputType()
export class DateTimeNullableFilter {
  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  equals?: Date | null;

  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  in?: Date[] | null;

  @Field(() => [Date], {
    nullable: true,
  })
  @Type(() => Date)
  notIn?: Date[] | null;

  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lt?: Date;

  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  lte?: Date;

  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gt?: Date;

  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  gte?: Date;

  @Field(() => Date, {
    nullable: true,
  })
  @Type(() => Date)
  not?: Date;
}
