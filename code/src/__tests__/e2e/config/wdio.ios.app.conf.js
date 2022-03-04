const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./output/tests/steps/**/*.steps.js'];

config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    'appium:deviceName': 'iPhone 11',
    'appium:platformVersion': '13.4',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), '../../../ios/output/app/Build/Products/Debug-iphonesimulator/RNWorkshop.app'), // Here goes the route to the app
    'appium:noReset': true,
    'appium:newCommandTimeout': 240
  }
];

exports.config = config;
