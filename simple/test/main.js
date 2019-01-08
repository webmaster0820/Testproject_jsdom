// load dependencies
var fs = require('fs');
var assert = require('assert');

// load module under test
eval(fs.readFileSync('validations.js') + '');
eval(fs.readFileSync('checkForm.js') + '');

describe('validations', function() {

    describe('isNameValid()', function() {
        var result

        beforeEach(function() {
            result = isNameValid('James');
        });

        it('should return true', function() {
            assert.ok(result)
        });
    });

    describe('isPhoneNumberValid()', function() {
        var result

        beforeEach(function() {
            result = isPhoneNumberValid('01234 567 890')
        });

        it('should return true', function() {
            assert.ok(result)
        });
    });

});

describe('checkForm', function() {

    describe('isFormDataValid()', function() {
        var result

        beforeEach(function() {
            result = isFormDataValid('James', '01234 567 890')
        });

        it('should return true', function() {
            assert.ok(result)
        });
    });

});
