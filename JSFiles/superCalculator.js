"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./pageObjects/Calculator");
describe('Super Calculator Test Spec', () => {
    // browser.driver.manage().window().maximize();
    it('simple math equation', () => {
        // const EC = protractor.ExpectedConditions;
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/').then(() => __awaiter(void 0, void 0, void 0, function* () {
            const calculator = new Calculator_1.Calculator();
            yield calculator.firstInput.sendKeys('5');
            yield calculator.secondInput.sendKeys('3');
            yield calculator.operatorInput.element(protractor_1.by.css('option[value=MULTIPLICATION]')).click();
            yield calculator.goButton.click();
            // browser.wait(EC.textToBePresentInElementValue(by.tagName('h2'), '.'), 1000);
            // Due to loader coming,
            yield protractor_1.browser.sleep(2000);
            const text = yield protractor_1.element(protractor_1.by.repeater('result in memory')).element(protractor_1.by.css('td:nth-child(3)')).getText();
            console.log(text);
            expect(text).toEqual('15');
            // .then((text) => {
            //   console.log(text);
            //   expect(text).toEqual('15');
            // });
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwZXJDYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3VwZXJDYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELHlEQUFzRDtBQUV0RCxRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBQzFDLCtDQUErQztJQUMvQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO1FBQzlCLDRDQUE0QztRQUM1QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtZQUN4RSxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsTUFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2RixNQUFNLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEMsK0VBQStFO1lBQy9FLHdCQUF3QjtZQUN4QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsZ0NBQWdDO1lBQ2hDLE1BQU07UUFDUixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9