function getName() {
    var element = window.document.getElementById('form-name');
    return element.innerHTML
}

function getPhone() {
    var element = window.document.getElementById('form-phone');
    return element.innerHTML
}

function validateForm() {
    var valid = isFormDataValid(getName(), getPhone());
    var element = window.document.getElementById('label-result');
    if (valid) {
        element.innerHTML = 'valid'
    } else {
        element.innerHTML = 'invalid'
    }
}
