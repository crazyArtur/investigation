const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const number = document.getElementById('number');
const fileInput = document.getElementById('exampleFile');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Validation colors
const green = '#4caf50';
const red = '#f44336';

const MiB = 10485760;

// Handle form
form.addEventListener('submit', function (e) {
    e.preventDefaut();
    if (validateName() && validateEmail() && validateNumber()) {

    }
})

name.onblur = validateName;
email.onblur = validateEmail;
phone.onblur = validatePhone;
number.onblur = validateNumber;
// fileInput.onclick = function () {
//     console.log('FIRST');
//     this.value = null;
// };
fileInput.onchange = validateImage;

// Validators
function validateName() {
    console.log('NAME');
    if (checkIfEmpty(name)) return;
    if (!checkIfOnlyLetters(name)) return;
}

function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!isEmailValid(email)) return;
}

function validatePhone() {
    if (checkIfEmpty(phone)) return;
    if (!isPhoneValid(phone)) return;
}

function validateNumber() {
    if (checkIfEmpty(number)) return;
    if (!meetLength(number, 4, 6)) return;
    if (!checkIfOnlyNumbers(number)) return;
}

function validateImage() {
    console.log("IMAGE");
    var filePath = fileInput.value;
    let allowedExt = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExt.exec(filePath)) {
        // setInvalid(fileInput, `Wrong file`);
        fileInput.value = '';
        return false;
    } else {
        // IMAGE PREVIEW
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = new Image;
                img.onload = function () {
                    document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '" id="imagePreviewIMG"/>';
                    console.log("The width of the image is " + img.width + "px.");
                    console.log("The height of the image is " + img.height + "px.");
                    if (img.width > 1000 || img.height > 1000) {
                        fileInput.value = '';
                        console.log("Wrong dimensions");
                        return false;
                    }
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    var fileSize = fileInput.files[0].size;
    console.log(fileSize);
    if (fileSize > MiB) {
        fileInput.value = '';
        console.log("File too large");
        return false;
    }
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

function checkIfOnlyNumbers(field) {
    if (/^[0-9]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only numbers`);
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

function isEmailValid(field) {
    let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return matchWithRegEx(regEx, field, 'Must be a valid email address');
}

function isPhoneValid(field) {
    let regEx = /(\+)?[0-9]{2,3}[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}/
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