

function loguear() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        swal("Error", "Por favor, completa todos los campos.", "error");
        return false;
    }

    if (!validateEmail(email)) {
        swal("Error", "Por favor, ingresa un correo electrónico válido.", "error");
        return false;
    }

    if (email == "admin@gmail.com" && password == "1234") {
        swal("Bienvenido", "Has iniciado sesión correctamente", "success");
        setInterval(function(){window.location.href = "../index.html";}, 20000000000);
    } else {
        alert("Usuario o contraseña incorrecta");
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}