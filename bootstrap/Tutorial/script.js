const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// validation colors
const green = '#4caf50';
const red = '#f44336';

name.onblur = validateName;
function validateName() {
    if (checkIfEmpty(name)) return;
    if (!checkIfOnlyLetters(name)) return;
}

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
    field.className = 'valid';
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
