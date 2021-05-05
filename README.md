## Dependencies

- Install the packages with `npm install protractor typescript protractor-cucumber-framework @cucumber/cucumber chai chai-as-promised @types/node ts-node -S`
- Add `skipLibCheck: false` in the `tsconfig.json` file since error thrown when executing tests with `@cucumber/messages` module
- Add `timeout.ts` file for overriding default timeout
- Update `configuration.ts` file like below
  ```
  {
    "framework": custom,
    "frameworkPath: require.resolve('protractor-cucumber-framework')
    "specs": ['<feature-files path>'],
    "cucumberOpts": {
        require: [
            '<step-definitions-files-path>',
            '<timeout-file-path>'
        ]
    }
  }
  ```
- To get a hint of the step definition file, just add `"cucumberOpts": { require: [ '<step-definitions-files-path>', '<timeout-file-path>' ] }` this option and execute with `npm run test` you will be able to see the hint in the terminal.

## IMPORTANT Things Implemented

- Protractor with Cucumber Framework
- Connectivity between Features and Step Definitions file
- Changing default timeout period before throwing any error while executing test cases
- Chai Assertion library is added
