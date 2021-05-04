"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AngularPage = void 0;
const protractor_1 = require("protractor");
class AngularPage {
    constructor() {
        this.angularJsLink = protractor_1.element(protractor_1.by.linkText('angular.io'));
        this.searchInputBox = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.AngularPage = AngularPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ndWxhclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Bbmd1bGFyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBSXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBUkQsa0NBUUMifQ==