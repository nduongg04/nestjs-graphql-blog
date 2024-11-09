import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comments/models/comment.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  published: boolean;

  @Field(() => User)
  author: User;

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
