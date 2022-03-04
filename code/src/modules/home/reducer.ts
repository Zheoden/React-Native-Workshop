import { HomeActions } from './actions';
import { IHomeState, INITIAL_STATE } from './state';
import * as types from './types';

export const HomeReducer = (state: IHomeState = INITIAL_STATE, actions: HomeActions): IHomeState => {
  switch (actions.type) {
    case types.HOME_CHANGE_LNG: {
      return {
        ...state,
        lng: actions.payload
      };
    }
    default:
      return state;
  }
};
