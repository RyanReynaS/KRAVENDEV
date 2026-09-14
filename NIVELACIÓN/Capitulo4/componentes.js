/**
 * ====================================
 * ARCHIVO: componentes.js
 * PROPÓSITO: Funciones para modificar componentes HTML (texto e imágenes) dinámicamente
 * Demuestra cómo cambiar el contenido y atributos de elementos existentes en la página
 * ====================================
 */

/**
 * FUNCIÓN: modificarTexto
 * DESCRIPCIÓN: Cambia el texto del elemento con id="titulo1" a "cualquier cosa"
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * FLUJO:
 * 1. Obtiene la referencia al elemento con id="titulo1"
 * 2. Cambia su texto a "cualquier cosa"
 *
 * NOTA:
 * La línea con "Texto Modificado" se sobrescribe por "cualquier cosa"
 * Solo el último cambio es visible, es decir, "cualquier cosa"
 */
// Función para cambiar el texto del elemento titulo1
modificarTexto=function(){
    let cmpTitulo1;  // Variable para almacenar la referencia al elemento

    // Obtén la referencia al elemento con id="titulo1" (el encabezado h1 en el HTML)
    cmpTitulo1 = document.getElementById("titulo1");

    // Cambia el texto del elemento a "Texto Modificado"
    cmpTitulo1.innerText = "Texto Modificado";

    // NOTA: Esta línea sobrescribe la anterior
    // Cambia el texto nuevamente a "cualquier cosa"
    // El usuario solo verá el último cambio: "cualquier cosa"
    cmpTitulo1.innerText="cualquier cosa"
}

/**
 * FUNCIÓN: modificarImagen
 * DESCRIPCIÓN: Cambia la imagen con id="imagen1" a "perro.png"
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * FLUJO:
 * 1. Obtiene la referencia al elemento <img> con id="imagen1"
 * 2. Cambia su atributo src (ruta de la imagen) a "perro.png"
 * 3. La página mostrará la nueva imagen
 *
 * NOTA IMPORTANTE:
 * El atributo .src especifica la ruta de la imagen
 * Si cambias "perro.png" a otro nombre de archivo:
 * - "gato.png" mostrará una imagen de gato
 * - "imagen.jpg" mostrará imagen.jpg
 * - "fotos/casa.png" buscará la imagen en la carpeta "fotos"
 */
// Función para cambiar la imagen del elemento imagen1
modificarImagen=function(){
    let cmpImagen;  // Variable para almacenar la referencia al elemento

    // Obtén la referencia al elemento <img> con id="imagen1"
    cmpImagen = document.getElementById("imagen1");

    // Cambia el atributo src (Source) de la imagen
    // src especifica la ruta del archivo de imagen
    // Cambiar el src hace que se muestre una imagen diferente
    cmpImagen.src="perro.png";
}   

