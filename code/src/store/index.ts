import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import IStoreState from './IStoreState';

import { HomeReducer } from '../modules/home/reducer';

const reducers = combineReducers<IStoreState>({
  home: HomeReducer
});

export default createStore(reducers, applyMiddleware(thunk));
