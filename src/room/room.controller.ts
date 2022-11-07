import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.dto';
import { DeleteRoomDto } from './dto/delete-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly room: RoomService) {}

  @Post()
  async PostTest(@Body() createRoomDto: RoomDto )  {
    try {
        const room = await this.room.create(createRoomDto);
        console.log('ROOM ID =====> ',  room['roomId']);
        console.log('Created successfully');
        return room;
    }
    catch(err) {
        console.log('ERROR =====> ', err);
    }
  }
  @Get()
    findAll() {
        return this.room.findAll();
    }
  @Put()
    async update(@Body() updateRoomDto: RoomDto) {
        try{
            const updatedRoom = await this.room.update(updateRoomDto.roomId, updateRoomDto);
            console.log('Updated successfully');
            console.log('Updated room =====> ', updatedRoom);
            return updatedRoom;
        }
        catch(err) {
            console.log('ERROR =====> ', err);
        }
    } 
  @Delete()
    async delete(@Body() roomId: DeleteRoomDto) {
        try{
            const deletedRoom = await this.room.delete(roomId.roomId);
            console.log('Deleted successfully');
            console.log('Deleted room =====> ', deletedRoom);
            return deletedRoom;
        }
        catch(err) {
            console.log('ERROR =====> ', err);
        }
    }
}
