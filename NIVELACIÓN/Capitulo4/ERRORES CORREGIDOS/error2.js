/**
 * ARCHIVO: error2.js
 * PROPÓSITO: Funciones para cambiar emojis (imagen y texto)
 */

/**
 * FUNCIÓN: imgEmoji
 * Cambia la imagen y texto a TRISTE
 */
imgEmoji = function() {
    let cmpImagen = document.getElementById("imgEmoji");  // Referencia a imagen
    let cmpTexto = document.getElementById("txtEmoji");   // Referencia a texto

    cmpImagen.src = "triste.jpg";     // Cambia imagen a triste
    cmpTexto.textContent = "TRISTE";  // Cambia texto a TRISTE
}

/**
 * FUNCIÓN: imgEmoji2
 * Cambia la imagen y texto a CANSADO
 */
imgEmoji2 = function() {
    let cmpImagen = document.getElementById("imgEmoji");  // Referencia a imagen
    let cmpTexto = document.getElementById("txtEmoji");   // Referencia a texto

    cmpImagen.src = "cansado.png";     // Cambia imagen a cansado
    cmpTexto.textContent = "CANSADO";  // Cambia texto a CANSADO
}