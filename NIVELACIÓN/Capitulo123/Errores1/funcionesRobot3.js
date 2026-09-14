/**
 * ====================================
 * ARCHIVO: funcionesRobot3.js
 * PROPÓSITO: Función que simula auto-eliminación y define una función anidada de explosión
 * Demuestra el concepto de funciones anidadas (funciones dentro de funciones)
 * ====================================
 */

/**
 * FUNCIÓN: autoeliminar
 * DESCRIPCIÓN: Auto-elimina el robot y DENTRO de esta función, define una nueva función explotar
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada (undefined)
 *
 * COMPORTAMIENTO:
 * 1. Muestra un mensaje diciendo que el robot ha sido eliminado
 * 2. Dentro de esta función, DEFINE una nueva función llamada explotar()
 * 3. Esta función explotar() interna solo existe después de que autoeliminar() ha sido llamada
 *
 * NOTA IMPORTANTE - FUNCIÓN ANIDADA:
 * La función explotar() se define DENTRO de autoeliminar()
 * Esto significa:
 * - Antes de llamar autoeliminar(), la función explotar() no existe
 * - Solo después de ejecutar autoeliminar(), la función explotar() está disponible
 * - Esto es diferente de definir ambas funciones al nivel superior
 *
 * DIFERENCIA CON funcionesRobot1.js:
 * - Robot1: explotar() se define directamente en el archivo
 * - Robot3: explotar() se define DENTRO de autoeliminar()
 *
 * CASOS DE USO:
 * Este patrón es útil cuando quieres que cierta lógica solo exista después de un evento específico
 */
autoeliminar = function(){
    // Muestra un mensaje de que el robot ha sido eliminado
    alert("El robot ha sido eliminado");

    // DEFINE una nueva función llamada explotar DENTRO de autoeliminar
    // Esta definición solo ocurre si alguien llama a autoeliminar()
    // Después de esto, explotar() estará disponible para ser llamada
    explotar = function(){
        // Muestra un mensaje de explosión
        alert("El robot ha explotado");
    }
}
