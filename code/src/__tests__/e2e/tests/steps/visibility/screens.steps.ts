import { Then, Given } from 'cucumber';
import { expect } from 'chai';
import Home from '../../screens/Home';
import Help from '../../screens/Help';
import Category from '../../screens/Category';

Given(/^the user is in the application$/, () => {
  Home.waitForDisplayed();

  expect(Home.isDisplayed()).to.be.true;
});

Then('the language is {word}', (lang: string) => {
  const wordToSearch = lang === 'Spanish' ? 'ESPAÑOL' : 'ENGLISH';

  const Search = Home.toggleLanguage.$$('//*').filter(item => {
    const text = item.getText();
    return text && text.toUpperCase().includes(wordToSearch);
  });

  expect(Search.length).to.be.greaterThan(0);
});

Then('the {word} page should be visible', (page: string) => {
  switch (page.toLowerCase()) {
    case 'category':
      // Category Page
      Category.waitForDisplayed();

      expect(Category.isDisplayed()).to.be.true;
      break;

    case 'help':
      // Help Page
      Help.waitForDisplayed();

      expect(Help.isDisplayed()).to.be.true;
      break;

    default:
      // Home Page
      Home.waitForDisplayed();

      expect(Home.isDisplayed()).to.be.true;
      break;
  }
});

Then('the page should say Category {int}', (category: number) => {
  const correctCat = Category.self.$$('//*').filter(item => {
    const text = item.getText().toLowerCase();
    return text && text.includes(`category${category.toString()}`);
  });

  expect(correctCat.length).to.be.greaterThan(0);
});
