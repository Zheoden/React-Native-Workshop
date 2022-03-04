const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./output/tests/steps/**/*.steps.js'];

config.capabilities = [
  {
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'Redmi Note 8 - 9',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), '../../../android/app/build/outputs/apk/debug/app-debug.apk'),
    'appium:appPackage': 'com.rnworkshop',
    'appium:appActivity': 'com.rnworkshop.MainActivity',
    'appium:noReset': false,
    'appium:fullReset': false,
    'appium:dontStopAppOnReset': true,
    'appium:newCommandTimeout': 180
  }
];

exports.config = config;
