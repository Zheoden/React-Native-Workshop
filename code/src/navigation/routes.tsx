// Import module screens

import HomeScreen from '../modules/home/HomeScreen';
import HelpScreen from '../modules/help/HelpScreen';
import { PlaceHolder } from '../modules/placeholder/PlaceholderScreen';
import { routeNames } from './utils';
import { translationHOC } from '../localization/hoc';

export const routes = {
  [routeNames.HomeScreen]: {
    path: '/',
    exact: true,
    name: 'HomeScreen',
    screen: HomeScreen
  },
  [routeNames.Help]: {
    path: '/help',
    exact: true,
    name: 'Help',
    screen: HelpScreen
  },
  [routeNames.Category1]: {
    path: '/Category1',
    exact: true,
    name: 'Category1',
    screen: translationHOC(PlaceHolder('Category1'))
  },
  [routeNames.Category2]: {
    path: '/Category2',
    exact: true,
    name: 'Category2',
    screen: translationHOC(PlaceHolder('Category2'))
  }
};
