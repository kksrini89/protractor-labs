import { by, element, ElementFinder } from 'protractor';

export class Calculator {
  firstInput: ElementFinder;
  secondInput: ElementFinder;
  operatorInput: ElementFinder;
  goButton: ElementFinder;
  result: ElementFinder;
  constructor() {
    this.firstInput = element(by.model('first'));
    this.secondInput = element(by.model('second'));
    this.operatorInput = element(by.model('operator')).element(by.css('option[value=ADDITION]'));
    this.goButton = element(by.id('gobutton'));
    this.result = element(by.repeater('result in memory')).element(by.css('td:nth-child(3)'));
  }
}
