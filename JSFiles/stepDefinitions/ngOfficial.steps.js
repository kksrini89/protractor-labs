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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const AngularPage_1 = require("../pageObjects/AngularPage");
const ngPage = new AngularPage_1.AngularPage();
cucumber_1.Given('I will navigate to AngularJs site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angularjs.org/');
}));
cucumber_1.When('I will click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ngPage.angularJsLink.click();
}));
cucumber_1.When('I will navigate to Angular site', () => __awaiter(void 0, void 0, void 0, function* () {
    const title = yield protractor_1.browser.getTitle();
    console.log('browser title', title);
}));
cucumber_1.Then('I will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ngPage.searchInputBox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdPZmZpY2lhbC5zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9uZ09mZmljaWFsLnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQyw0REFBeUQ7QUFFekQsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFakMsZ0JBQUssQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7SUFDcEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO0lBQzdDLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlDQUFpQyxFQUFFLEdBQVMsRUFBRTtJQUNqRCxNQUFNLEtBQUssR0FBRyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzNELE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9