document.querySelector('.container-form form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.querySelector('input[name="nombre"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var mensaje = document.querySelector('textarea[name="mensaje"]').value;

    if (!nombre || !email || !mensaje) {
        swal("Lo sentimos!", 'Por favor, completa todos los campos.', "error")
        return false;
    }

    if (!validateEmail(email)) {
        swal("Lo sentimos!", 'Por favor, ingresa un correo electrónico válido.', "error")
        return false;
    }

    swal("Felicidades!", "Has enviado tu mensaje!", "success")
    this.reset();
    return true;
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}