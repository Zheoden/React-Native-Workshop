import AppScreen from './app-screen';
import i18next from '../localization/i18n';

const SELECTORS = {
  PAGE: `~${i18next.t('helpPage')}`,
  BACK_BUTTON: `~${i18next.t('return')}`
};

class HelpScreen extends AppScreen {
  constructor() {
    super(SELECTORS.PAGE);
  }

  public get backButton(): WebdriverIO.Element {
    return $(SELECTORS.BACK_BUTTON);
  }
}

export default new HelpScreen();
