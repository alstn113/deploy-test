import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto';
import { RoomsRepository } from './rooms.repository';

@Injectable()
export class RoomsService {
  constructor(private readonly roomsRepository: RoomsRepository) {}

  async getRoomById(id: string) {
    return await this.roomsRepository.findRoomById(id);
  }

  async getRooms() {
    return await this.roomsRepository.findRooms();
  }

  async createRoom(dto: CreateRoomDto) {
    return await this.roomsRepository.createRoom(dto);
  }

  async deleteRoomById(id: string) {
    return await this.roomsRepository.deleteRoomById(id);
  }
}
