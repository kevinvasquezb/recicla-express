function validarFormulario() {
    var papel = document.getElementById('papel').checked;
    var plastico = document.getElementById('plastico').checked;
    var electronico = document.getElementById('electronico').checked;
    var carton = document.getElementById('carton').checked;

    if (!papel && !plastico && !electronico && !carton) {
        swal("Lo sentimos!", 'Por favor, selecciona al menos un tipo de residuo.', "error")
        return false;
    }

    
    swal("Felicidades!", "Has enviado tu solicitud de recolección!", "success")
    document.getElementById('form-recoleccion').reset();
    return true;
}
