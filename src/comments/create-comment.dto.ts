import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  title: string;
}
