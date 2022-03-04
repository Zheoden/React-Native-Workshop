import * as types from './types';

interface IHomeChangeLng {
  type: typeof types.HOME_CHANGE_LNG;
  payload: string;
}

export type HomeActions = IHomeChangeLng;

export const homeChangeLng = (language: string): IHomeChangeLng => ({
  type: types.HOME_CHANGE_LNG,
  payload: language
});
