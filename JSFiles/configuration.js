"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // newly added
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/*.feature'],
    cucumberOpts: {
        require: [
            './stepDefinitions/**/*.steps.js',
            './timeout.js'
        ]
    },
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDMUIsbURBQW1EO0lBQ25ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLGNBQWM7SUFDZCxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUNoQyxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUU7WUFDUCxpQ0FBaUM7WUFDakMsY0FBYztTQUNmO0tBQ0Y7SUFDRCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBQ0YsQ0FBQyJ9