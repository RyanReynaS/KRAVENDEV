
function sumar(num1, num2, num3) {
    let total = num1 + num2 + num3;
    return total;
}


function obtenerInfo(nombre, apellido, profesion) {
    return nombre + " " + apellido + " - " + profesion;
}


function mostrarResultado(sumando1, sumando2, resultado) {
    console.log("El resultado de sumar " + sumando1 + " + " + sumando2 + " es " + resultado);
}


function hackearNasaEnPelicula() {
    console.log("Hackeando nasa 0%");
    console.log("Hackeando nasa 20%");
    console.log("Hackeando nasa 40%");
    console.log("Hackeando nasa 60%");
    console.log("Hackeando nasa 80%");
    console.log("Hackeando nasa 90%");
    console.log("Hackeando nasa 99%");
    console.log("La nasa ha sido hackeada");
}


function calcularEdad(anio) {
    let anioActual = new Date().getFullYear();
    let edad = anioActual - anio;
    return edad;
}


function calcularIVA(precioSinIva) {
    let iva = (precioSinIva * 12) / 100;
    let precioTotal = precioSinIva + iva;
    return precioTotal;
}


function repasar() {
    console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada");
}


function repasarMas() {
    return "En este punto debemos estar super claros en crear funciones";
}


function llamarAtencion(nombre, mensaje) {
    let textoFinal = nombre + " " + mensaje + " !!";
    alert(textoFinal);
    return textoFinal;
}