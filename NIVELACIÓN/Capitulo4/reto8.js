/**
 * ====================================
 * ARCHIVO: reto8.js
 * PROPÓSITO: Funciones para simular encender y apagar una computadora cambiando imágenes
 * Demuestra el cambio dinámico de imágenes según acciones del usuario
 * ====================================
 */

/**
 * FUNCIÓN: modificarImagen
 * DESCRIPCIÓN: Cambia la imagen de la computadora a "compuPrendida.PNG" (encendida)
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * PROPÓSITO: Simular que la computadora se enciende
 * Esta función se ejecuta cuando el usuario hace clic en el botón "Encender"
 */
modificarImagen=function(){
    let cmpImagen;  // Variable para almacenar la referencia al elemento

    // Obtén la referencia al elemento <img> con id="compu"
    cmpImagen = document.getElementById("compu");

    // Cambia la imagen a "compuPrendida.PNG" (computadora encendida)
    // Si cambias a "compu_on.png", mostrará ese archivo en su lugar
    cmpImagen.src="compuPrendida.PNG";
}

/**
 * FUNCIÓN: modificarImagen2
 * DESCRIPCIÓN: Cambia la imagen de la computadora a "compuApagada.PNG" (apagada)
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * PROPÓSITO: Simular que la computadora se apaga
 * Esta función se ejecuta cuando el usuario hace clic en el botón "Apagar"
 */
modificarImagen2=function(){
    let cmpImagen;  // Variable para almacenar la referencia al elemento

    // Obtén la referencia al elemento <img> con id="compu"
    cmpImagen = document.getElementById("compu");

    // Cambia la imagen a "compuApagada.PNG" (computadora apagada)
    // La imagen cambia de nuevo a la imagen inicial
    cmpImagen.src="compuApagada.PNG";
}