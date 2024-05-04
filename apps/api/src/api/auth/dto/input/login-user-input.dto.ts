import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  @IsString()
  readonly username!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly password!: string;
}
