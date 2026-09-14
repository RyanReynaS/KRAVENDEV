/**
 * ARCHIVO: error3.js
 * PROPÓSITO: Funciones para cambiar solo el texto del emoji (sin imagen)
 */

/**
 * FUNCIÓN: cambiarFeliz
 * Cambia el texto a "FELIZ"
 */
cambiarFeliz=function(){
   let cmpTexto = document.getElementById("txtEmoji");  // Obtén referencia al texto
    cmpTexto.textContent = "FELIZ";                     // Cambia a FELIZ
}

/**
 * FUNCIÓN: cambiarCansado
 * Cambia el texto a "CANSADO"
 */
cambiarCansado=function(){
    let cmpTexto = document.getElementById("txtEmoji");  // Obtén referencia al texto
    cmpTexto.textContent = "CANSADO";                   // Cambia a CANSADO
}