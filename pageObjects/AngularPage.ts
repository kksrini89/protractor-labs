import { by, element, ElementFinder } from 'protractor';

export class AngularPage {
  angularJsLink: ElementFinder;
  searchInputBox: ElementFinder;

  constructor() {
    this.angularJsLink = element(by.linkText('angular.io'));
    this.searchInputBox = element(by.css("input[type='search']"));
  }
}
