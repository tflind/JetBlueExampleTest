﻿exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Capabilities to be passsed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    //Protractor is called.
    specs: ['spec.js'],

    //Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};