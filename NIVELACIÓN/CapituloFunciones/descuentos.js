function calcularDescuento(valorReal, porcentajeDescuento) {
    // 1. Aquí declaramos las variables que nos piden
    let valorDescuento;
    let total;

    // 2. Calculamos el descuento 
    valorDescuento = (valorReal * porcentajeDescuento) / 100;

    // 3. Restamos el descuento al valor original
    total = valorReal - valorDescuento;

    // 4. Retornamos el resultado para que otra función lo pueda usar
    return total;
}

function descontar() {
    // 1. Recuperamos el valor de txtMonto y lo hacemos entero
    let montoIngresado = parseInt(document.getElementById("txtMonto").value);
    
    // 2. Recuperamos el valor de txtDescuento y lo hacemos entero
    let descuentoIngresado = parseInt(document.getElementById("txtDescuento").value);

    // 3. Invocamos nuestra calculadora pasándole los valores que recuperamos
    let resultado = calcularDescuento(montoIngresado, descuentoIngresado);

    // 4. Mostramos el resultado en el elemento lblTotal
    // Usamos .innerText para cambiar el texto que está entre las etiquetas <h2></h2>
    document.getElementById("lblTotal").innerText = resultado;
}


