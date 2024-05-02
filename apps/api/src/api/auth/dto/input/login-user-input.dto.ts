import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  @IsEmail()
  readonly username!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly password!: string;
}
