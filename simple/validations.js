function isNameValid(name) {
    return name.match(/[a-zA-Z]*/)
}

function isPhoneNumberValid(phone) {
    return phone.match(/[0-9\w]*/) &&
        phone.length > 6 &&
        phone.length < 15
}
