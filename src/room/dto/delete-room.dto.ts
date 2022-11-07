import { IsNotEmpty, isNotEmpty } from "class-validator";

export class DeleteRoomDto {
  @IsNotEmpty()
  roomId: number;
}