const { element, browser, By } = require('protractor');

const formUrl = 'https://rahulshettyacademy.com/angularpractice/';

describe('Proto Commerce Form Submission', () => {
  browser.driver.manage().window().maximize();
  it('Success: On Submitting', () => {
    // Required input
    const formInput = {
      name: 'Sriram',
      email: 'sriram@gmail.com',
      password: '23424',
      gender: 'male',
      employmentStatus: 'Employed',
      DateOfBirth: '11/12/1989'
    };
    const SUCCESS_MSG = 'The Form has been submitted successfully';
    browser.get(formUrl);
    //browser.waitForAngularEnabled() : Since the given URL is angular website.
    element(By.name('name')).sendKeys(formInput.name);
    element(By.css("input[name='email']")).sendKeys(formInput.email);
    element(By.id('exampleInputPassword1')).sendKeys(formInput.password);
    //   Chekcbox
    element(By.css('input#exampleCheck1')).click();
    element(By.cssContainingText('#exampleFormControlSelect1 option', formInput.gender)).click();
    element.all(By.name('inlineRadioOptions')).get(1).click();
    element(By.buttonText('Submit'))
      .click()
      .then(() => {
        element(By.css('.alert-success'))
          .getText()
          .then((text) => {
            console.log(text);
            expect(text).toContain(SUCCESS_MSG);
          });
      });
  });

  it('Validating error message', () => {
    const nameError = 'Name is required';
    browser.get(formUrl);
    element(By.name('name')).sendKeys('');
    element(By.buttonText('Submit'))
      .click()
      .then(() => {
        element(By.css('.alert-danger'))
          .getText()
          .then((text) => {
            console.log(text);
            expect(text).toEqual(nameError);
          });
      });
    //   .then(() => {
    // element(By.css("input[name='name'] + .alert-danger"))
    //   });
  });
});
