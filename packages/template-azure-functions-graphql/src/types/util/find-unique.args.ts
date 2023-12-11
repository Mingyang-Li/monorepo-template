import { Field, InputType } from 'type-graphql';

@InputType()
export class FindUniqueArgs {
  @Field(() => FindUniqueInput, { nullable: true })
  where: FindUniqueInput;
}

@InputType()
export class FindUniqueInput {
  @Field()
  id: string;
}
