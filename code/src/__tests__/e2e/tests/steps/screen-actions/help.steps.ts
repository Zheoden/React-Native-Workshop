import { When } from 'cucumber';
import Help from '../../screens/Help';

When('the user clicks the back button in the help page', () => {
  Help.backButton.click();
});
