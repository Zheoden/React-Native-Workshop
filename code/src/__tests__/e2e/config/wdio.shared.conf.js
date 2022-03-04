const { join } = require('path');

exports.config = {
  runner: 'local',
  framework: 'cucumber',
  sync: true,
  logLevel: 'trace',
  deprecationWarnings: true,
  outputDir: join(process.cwd(), '../../output/uitests'),
  bail: 0,
  waitforTimeout: 6000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  specs: ['tests/features/**/*.feature'],
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: join(process.cwd(), '../../output/uitests'),
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
      }
    ]
  ],
  cucumberOpts: {
    requireModule: ['@babel/register'],
    backtrace: false,
    compiler: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 200000,
    ignoreUndefinedDefinitions: false,
    tagExpression: 'not @skip'
  },

  services: ['appium'],
  appium: {
    log: false,
    args: {},
    command: 'appium'
  },

  port: 4723,

  afterStep: function(uri, _feature, scenario) {
    if (scenario.error) {
      // eslint-disable-next-line no-undef
      driver.takeScreenshot();
    }
  }
};
