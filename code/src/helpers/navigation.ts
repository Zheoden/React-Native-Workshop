import { NavigationStackProp } from 'react-navigation-stack';

export const canNavigateBack = (nav: NavigationStackProp<any>) =>
  nav.isFirstRouteInParent ? !nav.isFirstRouteInParent() : true;
