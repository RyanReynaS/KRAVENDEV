let puntos = 0;
let lanzamientos = 5;

jugar = function () {
    let resultado;
    resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(1);
}

modificarPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblpuntos", puntos);
    //Si el jugador obtiene mas de 20 puntos
    if (puntos > 20) {
        //mostrar en pantalla un mensaje GANASTE!!
        cambiarTexto("lblganaste", "GANASTE!!");
        //invocar a limpiar
        limpiar();
    }
}

//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable
//y muestra en pantalla
modificarLanzamientos = function (numero) {
    lanzamientos = lanzamientos - numero;
    cambiarTexto("lbllanzamientos", lanzamientos);
    //si lanzamientos llega a 0
    if (lanzamientos <= 0) {
        //mostrar en pantalla el mensaje GAME OVER
        cambiarTexto("lblganaste", "GAME OVER");
        //invoca a limpiar
        limpiar();
    }
}

mostrarCara = function (numero) {
    if (numero == 1) {
        cambiarImagen("imgDado", "cara1.png");
    } else if (numero == 2) {
        cambiarImagen("imgDado", "cara2.png");
    } else if (numero == 3) {
        cambiarImagen("imgDado", "cara3.png");
    } else if (numero == 4) {
        cambiarImagen("imgDado", "cara4.png");
    } else if (numero == 5) {
        cambiarImagen("imgDado", "cara5.png");
    } else if (numero == 6) {
        cambiarImagen("imgDado", "cara6.png");
    }
}

lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}

limpiar = function () {
    //Colocar puntaje en 0 y lanzamientos en 5
    //en las variables y en pantalla
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblpuntos", puntos);
    cambiarTexto("lbllanzamientos", lanzamientos);
    //quitar la imagen ""
    cambiarImagen("imgDado", "");
}