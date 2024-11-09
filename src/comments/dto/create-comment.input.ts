import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => String)
  content: string;

  @Field(() => Number)
  postId: number;

  @Field(() => Number)
  authorId: number;
}
