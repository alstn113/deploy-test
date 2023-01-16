const BASE_URL: string = import.meta.env.VITE_APP_BASE_URL || 'http://localhost:8080';

export const API = {
  BASE_URL: `${BASE_URL}`,
  // rest
  ROOM: `${BASE_URL}/rooms`,
  // socket
  ROOM_SOCKET: `${BASE_URL}/socket/room`,
} as const;
