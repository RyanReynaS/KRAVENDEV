
function generarTablas() {
     let contenedor = document.getElementById("tabla-body");
     let inputNumero = document.getElementById("numero-tabla");
     let numero = inputNumero.value || 3;

     if (numero < 1 || numero > 10) {
          alert("Por favor ingresa un número entre 1 y 10");
          return;
     }

     let contenido = "";
        for (let i = 1; i <= 10; i++) {
            contenido += "<tr><td>" + numero + " × " + i + "</td><td>" + (numero * i) + "</td></tr>";
        }
     contenedor.innerHTML = contenido;
}
