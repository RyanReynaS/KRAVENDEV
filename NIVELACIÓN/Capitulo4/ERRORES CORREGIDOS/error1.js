/**
 * ====================================
 * ARCHIVO: error1.js
 * PROPÓSITO: Función para cambiar la imagen del emoji a triste
 * ====================================
 */

/**
 * FUNCIÓN: cambiarTriste
 * DESCRIPCIÓN: Cambia la imagen a "triste.png"
 * La imagen con id="imgEmoji" se actualiza con la imagen triste
 */
cambiarTriste=function(){
    let cmpImagen;
    // Obtén referencia a la imagen
    cmpImagen=document.getElementById("imgEmoji");
    // Cambia la imagen a triste
    cmpImagen.src="triste.png";
}