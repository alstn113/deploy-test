import { Module } from '@nestjs/common';
import { RoomGateway, RoomGatewayService } from './room';
@Module({
  providers: [RoomGateway, RoomGatewayService],
})
export class EventsModule {}
