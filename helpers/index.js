import AsyncStorage from "@react-native-async-storage/async-storage";
export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('access_token');
    console.log(value)
    if (value !== null) {
      return value
    }
    return
  } catch (e) {
    console.log(e)
  }
};