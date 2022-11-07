import { IsNotEmpty, isNotEmpty } from "class-validator";

export class RoomDto {
  @IsNotEmpty()
  roomId: number;


  @IsNotEmpty()
  guestName: string;
  
  @IsNotEmpty()
  lastChanged: Date;
  
  @IsNotEmpty()
  state: boolean; // true = occupied, false = free
}