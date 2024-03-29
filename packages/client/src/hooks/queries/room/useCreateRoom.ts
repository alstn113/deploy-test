import RoomAPI from '~/libs/api/room';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationOptionsOf } from '~/hooks/types';

const useCreateRoom = (options: UseMutationOptionsOf<typeof RoomAPI.createRoom> = {}) => {
  return useMutation(RoomAPI.createRoom, options);
};

export default useCreateRoom;
