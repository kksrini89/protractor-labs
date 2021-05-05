## Key Elements

- Tagging
- Hooks (Before/After)
- reporting with `json formatted`
- reporter with screenshots

## Detailed Steps

- Tagging the Feature/Test suite/Test case

  - first,

  ```
  @<tag-name>
  scenario: <scenario-description>
  Given <initial state>
  When <action to do>
  Then <expected outcome>
  ```

  Then, Update `configuration.ts` file like below

  ```
  {
    "cucumberOpts": {
        tags: '<tag-name>'
    }
  }
  ```

- After created `hooks.ts` file then update `configuration.ts`file like below,

  ```
  {
    "cucumberOpts": {
      require: ['./stepDefinitions/hooks.ts]
    }
  }
  ```

- `JSON formatted` reporting can be done by updating `configuration.ts` file,

  ```
  {
    "cucumberOpts": {
      "format": "json:<json file path to be saved>"
    }
  }
  ```

- To generate html report, do `npm install cucumber-html-reporter -D`

  - `cucumberOpts.format` value will be passed as an input to `options` of `cucumber-html-reporter`'s generate method.

  ```
  import * as reporter from 'cucumber-html-reporter';

  const protractorConfig: Config = {
    cucumberOpts: {
      format: 'json:./report.json'
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
  ```

- To take screenshots for failure test cases,

  ```
  After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
      this.attach(await browser.takeScreenshot(), 'image/png');
    }
  });
  ```
