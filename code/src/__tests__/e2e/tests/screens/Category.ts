import AppScreen from './app-screen';
import i18next from '../localization/i18n';

const SELECTORS = {
  PAGE: `~${i18next.t('category')}`,
  BACK_BUTTON: `~${i18next.t('return')}`
};

class CategoryScreen extends AppScreen {
  constructor() {
    super(SELECTORS.PAGE);
  }

  public get backButton(): WebdriverIO.Element {
    return $(SELECTORS.BACK_BUTTON);
  }
}

export default new CategoryScreen();
