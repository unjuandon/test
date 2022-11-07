import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  roomId: number;

  @Prop()
  guestName: string;

  @Prop()
  lastChanged: string;

  @Prop()
  state: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
