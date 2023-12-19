let puntos = 3000;

function canjear(costo) {
    if (puntos >= costo) {
        puntos -= costo;
        document.getElementById('puntos').innerText = 'Puntos: ' + puntos;
        swal("Felicidades!", "Has canjeado este producto!", "success");
    } else {
        swal("Lo sentimos!", "No tienes suficientes puntos para canjear este producto.", "error")
    }
}