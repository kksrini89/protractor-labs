import { Config } from 'protractor';

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  // newly added
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['../features/*.feature'],
  cucumberOpts: {
    require: [
      './stepDefinitions/**/*.steps.js', // accepts a glob
      './timeout.js'
    ]
  },
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true
  }
};
