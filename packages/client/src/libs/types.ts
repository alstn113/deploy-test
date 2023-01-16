export interface Room {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRoomParams {
  name: string;
}
