import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { CreateRoomDto } from './dto';

@Injectable()
export class RoomsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findRoomById(id: string) {
    const room = await this.prisma.room.findUnique({
      where: {
        id,
      },
    });
    if (!room) throw new HttpException('Room not found', 404);

    return room;
  }

  async findRooms() {
    return this.prisma.room.findMany({});
  }

  async createRoom(dto: CreateRoomDto) {
    return await this.prisma.room.create({
      data: dto,
    });
  }

  async deleteRoomById(id: string) {
    return await this.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
