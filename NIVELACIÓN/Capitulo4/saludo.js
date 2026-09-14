/**
 * ====================================
 * ARCHIVO: saludo.js
 * PROPÓSITO: Función para saludar al usuario por su nombre
 * Lee el nombre ingresado y muestra un saludo personalizado
 * ====================================
 */

/**
 * FUNCIÓN: saludar
 * DESCRIPCIÓN: Lee el nombre del usuario y muestra un saludo personalizado
 * PARÁMETROS: No recibe parámetros (obtiene el nombre del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO:
 * 1. Obtiene el valor del campo de entrada (el nombre del usuario)
 * 2. Muestra una alerta: "bienvenido" + nombre
 *
 * EJEMPLO:
 * Si el usuario escribe "Juan", mostrará: "bienvenidoJuan"
 * Si escribe "María", mostrará: "bienvenidoMaría"
 *
 * NOTA:
 * Falta un espacio entre "bienvenido" y el nombre
 * Debería ser: "bienvenido " + nombre (con espacio)
 * Para que muestre: "bienvenido Juan" (con espacio)
 */
saludar= function(){
    let cmpNombre;  // Variable para la referencia al elemento del nombre
    let nombre;     // Variable para almacenar el nombre del usuario

    // Obtén la referencia al elemento con id="txtNombre" (el campo de entrada)
    cmpNombre = document.getElementById("txtNombre");

    // Lee el valor del campo de entrada (lo que escribió el usuario)
    nombre = cmpNombre.value;

    // Muestra una alerta con el saludo personalizado
    // Concatena "bienvenido" con el nombre
    alert("bienvenido" + nombre);

}
