import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
