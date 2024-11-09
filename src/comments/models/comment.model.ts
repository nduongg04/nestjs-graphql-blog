import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Post)
  post: Post;

  @Field(() => User)
  author: User;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
