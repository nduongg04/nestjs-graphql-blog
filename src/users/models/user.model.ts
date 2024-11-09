import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Comment } from 'src/comments/models/comment.model';
import { Post } from 'src/posts/models/post.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
