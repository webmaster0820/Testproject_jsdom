// load dependencies
var fs = require('fs');
var assert = require('assert');
var jsdom = require('jsdom');

// load modules under test
var validations = fs.readFileSync('validations.js');
var checkForm = fs.readFileSync('checkForm.js');
var web = fs.readFileSync('web.js');

describe('form module', function() {

    var window;

    function getElement(id) {
        return window.document.getElementById(id);
    }

    function setElement(id, text) {
        getElement(id).innerHTML = text
    }

    beforeEach(function(done) {
        var html = fs.readFileSync(process.cwd() + '/test/fixture/index.html');

        jsdom.env({
            html: html,
            src: [validations, checkForm, web],
            done: function (err, win) {
                window = win;
                done(err);
            }
        });
    });

    describe('form is not validated', function() {
        var result;

        beforeEach(function() {
            result = getElement('label-result').innerHTML
        });

        it('should say "none" in the result display', function() {
            assert.equal(result, 'none');
        });
    });

    describe('filled in correctly and validated', function() {
        var result;

        beforeEach(function() {
            setElement('form-name', 'James')
            setElement('form-phone', '01234567890')
            window.validateForm()
            result = getElement('label-result').innerHTML
        });

        it('should say "valid" in the result display', function() {
            assert.equal(result, 'valid');
        });
    });

    describe('filled in incorrectly and validated', function() {
        var result;

        beforeEach(function() {
            setElement('form-name', 'Foo#213')
            setElement('form-phone', 'abc')
            window.validateForm()
            result = getElement('label-result').innerHTML
        });

        it('should say "invalid" in the result display', function() {
            assert.equal(result, 'invalid');
        });
    });

});
