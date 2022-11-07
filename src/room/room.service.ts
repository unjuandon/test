import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Room, RoomDocument } from './schema/room.schema';
import { RoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

    async create(createRoomDto: RoomDto) {
        const roomCreated = await this.roomModel.create(createRoomDto);
        console.log('Data created =======>',createRoomDto);
        return roomCreated;
    }

    async findAll() {
        return this.roomModel.find().exec();
    }

    async update(RoomId: number , updateRoomDto: RoomDto) {
        const roomUpdated = await this.roomModel.findByIdAndUpdate(RoomId , updateRoomDto); 
        console.log('Data updated =======>',roomUpdated);
        return roomUpdated;
    }

    async delete(roomId: number) {
        const roomDeleted = await this.roomModel.deleteOne({roomId: roomId});
        console.log('Data deleted =======>',roomDeleted);
        return roomDeleted;
    }
}
