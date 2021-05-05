Feature: To validate Super Calculator Web App

@Calculator
Scenario: To add two numbers

Given I will navigate to Calc site
When I add two numbers '3' and '5'
Then The displayed output should be "5"