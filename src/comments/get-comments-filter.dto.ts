import { CommentSortOrder } from "./comment-sort-order.enum";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";


export class GetCommentsFilterDto {
  @IsOptional()
  @IsIn([CommentSortOrder.ASCENDING, CommentSortOrder.DESCENDING])
  sort: string;

  @IsOptional()
  @IsNotEmpty()
  offset: CommentSortOrder;
}
