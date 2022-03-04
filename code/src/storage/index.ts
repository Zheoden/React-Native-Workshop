import AsyncStorage from '@react-native-community/async-storage';

/**
 * Receives an identifier (key) and a value (data) to be stored in the AsyncStorage.
 * @param identifier
 * @param value
 */
export const storeItem = async (identifier: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(identifier, value);
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Receives an identifier (key) and returns the associate value to it.
 * @param identifier
 */
export const getItem = async (identifier: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(identifier);
    return value;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Receives an identifier (key) and removes from the AsyncStorage the (Key - Value) pair associated with the identifier.
 * @param identifier
 */
export const deleteItem = async (identifier: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(identifier);
  } catch (error) {
    throw new Error(error);
  }
};
