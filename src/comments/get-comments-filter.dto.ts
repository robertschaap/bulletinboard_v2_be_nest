import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class GetCommentsFilterDto {
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sort: string;

  @IsOptional()
  @IsNotEmpty()
  offset: number;
}
