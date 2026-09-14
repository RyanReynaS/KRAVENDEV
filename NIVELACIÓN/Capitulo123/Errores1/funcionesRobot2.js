/**
 * ====================================
 * ARCHIVO: funcionesRobot2.js
 * PROPÓSITO: Función que simula la auto-eliminación de un robot
 * Demuestra una función de auto-destrucción del robot
 * ====================================
 */

/**
 * FUNCIÓN: autoeliminar
 * DESCRIPCIÓN: Simula el proceso de auto-eliminación del robot mostrando un mensaje
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada (undefined)
 *
 * USO: Cuando llamas a autoeliminar(), muestra un diálogo indicando que el robot ha explotado
 * Esta función podría usarse cuando el robot se autodestruye (por ejemplo, por sobrecalentamiento)
 *
 * DIFERENCIA CON funcionesRobot1.js:
 * - Robot1 tiene explotar() para explosión externa
 * - Robot2 tiene autoeliminar() para auto-destrucción
 * Ambos muestran el mismo mensaje, pero representan eventos diferentes
 */
autoeliminar = function() {
    // Muestra un mensaje indicando que el robot se ha auto-eliminado
    // La explosión en este caso es causada por el mismo robot (auto-destrucción)
    alert("El robot ha explotado");
}
