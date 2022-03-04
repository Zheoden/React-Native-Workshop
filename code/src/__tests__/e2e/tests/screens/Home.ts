import AppScreen from './app-screen';
import i18next from '../localization/i18n';

const SELECTORS = {
  PAGE: `~${i18next.t('homePage')}`,
  TOGGLE_LANGUAGE: `~${i18next.t('toggle')} ${i18next.t('current language')}`,
  HELP_BUTTON: `~${i18next.t('go to help')}`,
  CATEGORY1_BUTTON: `~${i18next.t('go to category')} 1`,
  CATEGORY2_BUTTON: `~${i18next.t('go to category')} 2`
};

class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.PAGE);
  }

  public get toggleLanguage(): WebdriverIO.Element {
    return $(SELECTORS.TOGGLE_LANGUAGE);
  }

  public get helpButton(): WebdriverIO.Element {
    return $(SELECTORS.HELP_BUTTON);
  }

  public get Category1Button(): WebdriverIO.Element {
    return $(SELECTORS.CATEGORY1_BUTTON);
  }

  public get Category2Button(): WebdriverIO.Element {
    return $(SELECTORS.CATEGORY2_BUTTON);
  }
}

export default new HomeScreen();
