/**
 * ARCHIVO: resolucion1.js
 * PROPÓSITO: Funciones para cambiar emojis en 3 estados: FELIZ, TRISTE, CANSADO
 * Cada función cambia tanto la imagen como el texto
 */

/**
 * FUNCIÓN: imgEmoji
 * Cambia imagen a "feliz.jpg" y texto a "FELIZ"
 */
imgEmoji = function() {
    let cmpImagen = document.getElementById("imgEmoji");  // Obtén imagen
    let cmpTexto = document.getElementById("txtEmoji");   // Obtén texto

    cmpImagen.src = "feliz.jpg";       // Cambia imagen
    cmpTexto.textContent = "FELIZ";    // Cambia texto
}

/**
 * FUNCIÓN: imgEmoji2
 * Cambia imagen a "triste.jpg" y texto a "TRISTE"
 */
imgEmoji2 = function() {
    let cmpImagen = document.getElementById("imgEmoji");
    let cmpTexto = document.getElementById("txtEmoji");

    cmpImagen.src = "triste.jpg";
    cmpTexto.textContent = "TRISTE";
}

/**
 * FUNCIÓN: imgEmoji3
 * Cambia imagen a "cansado.png" y texto a "CANSADO"
 */
imgEmoji3 = function() {
    let cmpImagen = document.getElementById("imgEmoji");
    let cmpTexto = document.getElementById("txtEmoji");

    cmpImagen.src = "cansado.png";
    cmpTexto.textContent = "CANSADO";
}