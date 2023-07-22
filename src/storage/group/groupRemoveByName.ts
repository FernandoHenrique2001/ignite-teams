import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupGetAll } from "./groupGetAll";

export const groupRemoveByName = async (groupDeteled: string) => {
  try {
    const storedGroups = await groupGetAll();
    const groups = storedGroups.filter((group) => group !== groupDeteled);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeteled}`);
  } catch (error) {
    throw error;
  }
};
