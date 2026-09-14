/**
 * ====================================
 * ARCHIVO: variables.js
 * PROPÓSITO: Demuestra cómo funciona una variable global y múltiples funciones que la modifican
 * Contiene funciones para manipular un valor de puntaje que persiste entre llamadas
 * ====================================
 */

// Declarar la variable puntaje (variable global que será accesible desde todas las funciones)
let puntaje;

// Asignar el valor inicial 0 a la variable puntaje
// Esto es el punto de partida - el puntaje comienza en 0
puntaje = 0;

/**
 * FUNCIÓN: cambiar
 * DESCRIPCIÓN: Cambia el valor de puntaje directamente a 1000
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Cuando se llama, establece puntaje = 1000, sin importar su valor anterior
 * Si el puntaje estaba en 50, después de llamar cambiar() será 1000
 */
cambiar = function() {
    puntaje = 1000;
}

/**
 * FUNCIÓN: mostrar
 * DESCRIPCIÓN: Muestra el valor actual del puntaje en una ventana emergente (alert) al usuario
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Abre un diálogo emergente que muestra el mensaje "El puntaje es: " seguido del valor actual de puntaje
 * Por ejemplo: Si puntaje = 100, mostrará "El puntaje es: 100"
 */
mostrar = function() {
    // Concatena el texto con el valor actual de la variable puntaje y lo muestra en un alert
    alert("El puntaje es: " + puntaje);
}

/**
 * FUNCIÓN: incrementarUno
 * DESCRIPCIÓN: Aumenta el puntaje en 1 (suma 1 al valor actual)
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Suma 1 al puntaje actual
 * Ejemplo: Si puntaje = 50, después de llamar incrementarUno() será 51
 * Nota: "puntaje = puntaje + 1" significa: toma el valor actual de puntaje, suma 1, y guarda el resultado en puntaje
 */
incrementarUno = function() {
    puntaje = puntaje + 1;
}

/**
 * FUNCIÓN: disminuirUno
 * DESCRIPCIÓN: Disminuye el puntaje en 1 (resta 1 al valor actual)
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Resta 1 al puntaje actual
 * Ejemplo: Si puntaje = 50, después de llamar disminuirUno() será 49
 * Nota: "puntaje = puntaje - 1" significa: toma el valor actual de puntaje, resta 1, y guarda el resultado en puntaje
 */
disminuirUno = function() {
    puntaje = puntaje - 1;
}

/**
 * FUNCIÓN: sumarDiez
 * DESCRIPCIÓN: Aumenta el puntaje en 10 unidades
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Suma 10 al puntaje actual
 * Ejemplo: Si puntaje = 50, después de llamar sumarDiez() será 60
 * Nota: Si cambias el número 10 por otro número, sumarás o restarás cantidades diferentes
 * Por ejemplo: cambiar "puntaje + 10" a "puntaje + 5" haría que solo sume 5
 */
sumarDiez = function() {
    puntaje = puntaje + 10;
}

/**
 * FUNCIÓN: RestarDiez
 * DESCRIPCIÓN: Disminuye el puntaje en 10 unidades
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * EFECTO: Resta 10 al puntaje actual
 * Ejemplo: Si puntaje = 50, después de llamar RestarDiez() será 40
 * Nota: Si cambias el número 10 por otro número, restarás cantidades diferentes
 * Por ejemplo: cambiar "puntaje - 10" a "puntaje - 5" haría que solo reste 5
 */
RestarDiez = function() {
    puntaje = puntaje - 10;
}
