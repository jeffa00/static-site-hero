'use strict';
/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
var assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
var vscode = require('vscode');
var myExtension = require('../extension');

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {

    test("Update Template with Date", () => {
       let template = "/images/${year}/${month}";

       let controlTemplate = template;

        let today = new Date();
        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);

        controlTemplate = controlTemplate.replace("${year}", year);
        controlTemplate = controlTemplate.replace("${month}", month);

       let updatedTemplate = myExtension.updateTemplateWithDate(template);

       assert.equal(updatedTemplate, controlTemplate, "Updated Template not correct. Expected: " + controlTemplate + " but got: " + updatedTemplate);
    });

});