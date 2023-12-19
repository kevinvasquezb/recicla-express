
function loguear(){

let user = document.getElementById("email").value;
let pass = document.getElementById("password").value;

if (user == "admin" && pass == "1234") {
    swal("Bienvenido", "Has iniciado sesión correctamente", "success");
    setInterval(function(){window.location.href = "index.html";}, 20000000000);
    window.location.href = "index.html";
}
else{
    swal("Error"," Usuario o contraseña incorrecta", "error");
}
}

