import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['../features/*.feature'],
  cucumberOpts: {
    // updated
    // tags: '@ngOfficial',
    format: 'json:./report.json',
    require: [
      './stepDefinitions/**/*.steps.js', // accepts a glob
      './stepDefinitions/hooks.js',
      './timeout.js'
    ]
  },
  onComplete: () => {
    const options: reporter.Options = {
      theme: 'bootstrap',
      jsonFile: './JSFiles/report.json',
      output: './JSFiles/report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        Browser: 'Chrome  54.0.2840.98',
        Platform: 'Windows 10',
        Parallel: 'Scenarios',
        Executed: 'Remote'
      }
    };
    reporter.generate(options);
  }
};
