import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';

@Module({
  imports: [RoomModule, MongooseModule.forRoot(MONGO_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
