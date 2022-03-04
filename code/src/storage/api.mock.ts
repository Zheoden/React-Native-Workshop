import { getItem, storeItem } from '.';

const identifier = 'Test:UserToken';

export const setUserSession = async (): Promise<void> => {
  // await deleteItem(identifier);
  console.log('[User Token]: Obtaining User Token...');
  try {
    let token: string | null = await getItem(identifier);
    console.log(`token: ${token}`);
    if (token === null) {
      console.log('[User Token]: User Token not found, getting a new token');
      token = await getTokenFromAPIMock();
      await storeItem(identifier, 'Test token');
      console.log('[User Token]: New token stored successfully!');
    } else {
      console.log('[User Token]: Token found!');
    }
  } catch (error) {
    console.log(`[User Token ERROR]: ${error}`);
  }
};

const getTokenFromAPIMock = async (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Test Token');
    }, 1000);
  });
};
