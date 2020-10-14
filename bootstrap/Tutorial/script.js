const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const number = document.getElementById('number');
const file = document.getElementById('file');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Validation colors
const green = '#4caf50';
const red = '#f44336';

name.onblur = validateName;
email.onblur = validateEmail;
number.onblur = validateNumber;

// Validators
function validateName() {
    if (checkIfEmpty(name)) return;
    if (!checkIfOnlyLetters(name)) return;
}

function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email)) return;
}

function validateNumber() {
    if (checkIfEmpty(number)) return;
    if (!meetLength(number, 4, 6)) return;
}

// Utility 
function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
        // set field invalid
        setInvalid(field, `${field.name} must not be empty`)
        return true;
    } else {
        // set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function setInvalid(field, message) {
    field.className = 'form-control is-invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field, message) {
    field.className = 'form-control is-valid';
    field.nextElementSibling.innerHTML = '';
    // field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}

function meetLength(field, minLength, maxLenght) {
    if (field.value.length >= minLength && field.value.length < maxLenght) {
        setValid(field);
        return true;
    } else if (field.value.length < minLength) {
        setInvalid(field, `${field.name} must be at least ${minLength} characters long`);
        return false;
    } else {
        setInvalid(field, `${field.name} must be shorter than ${maxLenght} characters`)
        return false;
    }
}

function containsCharacters(field) {
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return matchWithRegEx(regEx, field, 'Must be a valid email address');
}

function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}