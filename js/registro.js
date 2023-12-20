document.getElementById('boton_p').addEventListener('click', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var tipo = document.getElementById('Tipo').value;

    var warnings = document.getElementById('warnings');

    var isValid = true;
    var errorMsgs = [];

    if (!validateEmail(email)) {
        isValid = false;
        errorMsgs.push('Correo no válido');
    }

    if (!validatePassword(password)) {
        isValid = false;
        errorMsgs.push('Contraseña no válida');
    }

    if (!validateName(name)) {
        isValid = false;
        errorMsgs.push('Nombre no válido');
    }

    if (!validateLastName(lastname)) {
        isValid = false;
        errorMsgs.push('Apellido no válido');
    }

    if (!validatePhone(phone)) {
        isValid = false;
        errorMsgs.push('Teléfono no válido');
    }

    if (isValid) {
        warnings.style.color = 'green';
        warnings.innerHTML = 'Registro exitoso';
    } else {
        warnings.style.color = 'red';
        warnings.innerHTML = errorMsgs.join(', ');
    }
});

function validateEmail(email) {
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateName(name) {
    return name.length > 0;
}

function validateLastName(lastname) {
    return lastname.length > 0;
}

function validatePhone(phone) {
    var re = /^\d{8}$/;
    return re.test(phone);
}