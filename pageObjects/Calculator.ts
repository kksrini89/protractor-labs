import { by, element, ElementFinder } from 'protractor';

export class Calculator {
  firstInput: ElementFinder;
  secondInput: ElementFinder;
  operatorInput: ElementFinder;
  goButton: ElementFinder;

  constructor() {
    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.operatorInput = element(by.model('operator'));
    this.goButton = element(by.id('gobutton'));
  }
}
