# Unit Testing

- [Overview](#overview)
- [Jest](#Jest)
- [Setting-up Jest](#Setting-up-Jest)

## Overview

Unit testing is a method is designed to verify individual modules (functions, classes, etc.) at a low level, to verify that module is behaving as specified. Stubs or mock objects are often used in unit test, which keep the module isolated and do not rely on all of the other parts of the program.

It is separate from other types of testing like integration testing. The idea is to avoid mixing modules on a same test. Thus, if modules work correctly but results are not as expected, then integration problems are to blame.

## Jest

[Jest](https://jestjs.io/) is a JavaScript test runner, that is, a JavaScript library for creating, **running**, and **structuring tests**. Jest is distributed as an NPM package, you can install it in any JavaScript project. Jest is one of the most popular test runners these days.

## Setting up Jest

You can find a very thoroughly written guide [here](https://southworks.atlassian.net/wiki/spaces/OR/pages/739540993/Jest+React+Native#How-do-we-set-up-Jest-in-our-project%3F)

**TL;DR**

We need these dependencies
```ts
yarn add jest
yarn add enzyme
yarn add react-dom
yarn add jsdom
yarn add enzyme-adapter-react-16
yarn add jest-enzyme
yarn add @types/enzyme
yarn add @types/enzyme-adapter-react-16
```

And we need to add these files to the root of our project

<details>
  <summary>jest.config.js</summary>

```ts
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native|native-base)',
  ],
  testMatch: [
    '**/__tests__/unit/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>setup-tests.js'
  ],
};
```
</details>

<details>
  <summary>setup-tests.js</summary>

```ts
import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });
```
</details>


And that's it. We can now proceed to start testing.

We added inline comments for you to review the test steps and why are they there

## References

- [Jest](https://jestjs.io/) 
- [Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html)
- [Southworks Jest + Enzyme guide for React Native](https://southworks.atlassian.net/wiki/spaces/OR/pages/739540993/Jest+React+Native)