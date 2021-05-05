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
// This hook will get executed before executing all the test cases
cucumber_1.Before(() => {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Before('@ngOfficial', () => {
    console.log(`This is before hook but only for ngOfficial feature`);
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            this.attach(yield protractor_1.browser.takeScreenshot(), 'image/png');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkQ7QUFDM0QsMkNBQXFDO0FBRXJDLGtFQUFrRTtBQUNsRSxpQkFBTSxDQUFDLEdBQUcsRUFBRTtJQUNWLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9