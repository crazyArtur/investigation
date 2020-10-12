const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// validation colors
const green = '#4caf50';
const red = '#f44336';

function validateName() {
    // check if empty
    if (checkIfEmpty(name)) return;
    // check if only letters
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