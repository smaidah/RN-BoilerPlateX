import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOCAL_STORAGE_KEYS } from '../../constants/GenericConstants';

export const setAccessToken = async (accessToken) => {
  await AsyncStorage.setItem(
    LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
    accessToken || '',
  );
};

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  } catch (error) {
    return null;
  }
};

export const deleteLoginData = async () => {
  await AsyncStorage.clear();
};
