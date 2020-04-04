import { CommentSortOrder } from "./comment-sort-order.enum";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";


export class GetCommentsFilterDto {
  @IsOptional()
  @IsIn([CommentSortOrder.ASCENDING, CommentSortOrder.DESCENDING])
  sort: CommentSortOrder;

  @IsOptional()
  @IsNotEmpty()
  offset: number;
}
