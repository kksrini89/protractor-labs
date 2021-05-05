import { After, Before, Status } from '@cucumber/cucumber';
import { browser } from 'protractor';

// This hook will get executed before executing all the test cases
Before(() => {
  browser.manage().window().maximize();
});

Before('@ngOfficial', () => {
  console.log(`This is before hook but only for ngOfficial feature`);
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    this.attach(await browser.takeScreenshot(), 'image/png');
  }
});
