import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const playersGetByGroup = async (group: string) => {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];
    return players;
  } catch (error) {
    throw error;
  }
};
