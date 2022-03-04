import { When } from 'cucumber';
import Category from '../../screens/Category';

When('the user clicks the back button in the category page', () => {
  Category.backButton.click();
});
