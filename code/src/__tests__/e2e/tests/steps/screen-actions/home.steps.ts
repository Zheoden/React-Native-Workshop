import { When } from 'cucumber';
import Home from '../../screens/Home';
import i18next from '../../localization/i18n';

When('the user clicks the {word} toggle button', (lang: string) => {
  if (lang === 'English') {
    Home.toggleLanguage.click();
  } else {
    const { translation } = i18next.getDataByLanguage('es');
    $(`~${translation.toggle} ${translation[`current language`]}`).click();
  }
});

When('the user clicks the Go to {} button', (page: string) => {
  switch (page.toLowerCase()) {
    case 'category 1':
      Home.Category1Button.click();
      break;

    case 'category 2':
      Home.Category2Button.click();
      break;

    case 'help':
      Home.helpButton.click();
      break;
    default:
      break;
  }
});
