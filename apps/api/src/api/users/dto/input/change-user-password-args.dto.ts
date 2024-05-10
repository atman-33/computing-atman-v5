import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ChangeUserPasswordInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly password!: string;
}
