const { browser, element, By } = require('protractor');

describe('Shopping cart', () => {
  const URL = 'https://rahulshettyacademy.com/angularpractice/';
  browser.driver.manage().window().maximize();
  it('add item to cart', () => {
    browser.get(URL);
    element(By.linkText('Shop')).click();
    const items = element.all(By.tagName('app-card'));
    items.each((item) => item.element(By.css("button[class='btn btn-info'")).click());
    element(By.partialLinkText('Checkout'))
      .getText()
      .then((text) => {
        items.count().then((addedCount) => {
          const val = text.trim().split('(')[1].trim().charAt(0);
          console.log(`Added Count`, addedCount);
          console.log(`Retrieved Count`, val);
          expect(addedCount).toBe(parseInt(val));
        });
      });
  });

  it('check the added item price against total field', () => {
    browser.get(URL);
    element(By.linkText('Shop')).click();
    const items = element.all(By.tagName('app-card'));
    items.each((item) => item.element(By.css("button[class='btn btn-info'")).click());
    browser.sleep(2000);
    element(By.partialLinkText('Checkout'))
      .click()
      .then(() => {
        const addedItems = element.all(By.css('tbody tr'));
        let addItemTotal = 0;
        addedItems.each((item) => {
          const totalTdValue = item.all(By.tagName('td')).get(3).element(By.tagName('strong'));
          totalTdValue.isPresent().then((doesExists) => {
            if (doesExists) {
              totalTdValue.getText().then((priceText) => {
                const val = priceText.trim().split(' ')[1].trim();
                console.log(val);
                addItemTotal += parseInt(val);
              });
            }
          });
        });
        addedItems
          .get(4)
          .element(By.css('td:last-child strong'))
          .getText()
          .then((text) => {
            console.log('Total Value:', text);
            const totalVal = text.trim().split(' ')[1].trim();
            expect(parseInt(totalVal)).toBe(addItemTotal);
          });
      });
  });
});
