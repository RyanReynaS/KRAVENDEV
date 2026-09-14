/**
 * ====================================
 * ARCHIVO: convertidorCelsius.js
 * PROPÓSITO: Función para convertir temperaturas de Celsius a Fahrenheit
 * Demuestra conversión de unidades usando una fórmula matemática
 * ====================================
 */

/**
 * FUNCIÓN: convertir
 * DESCRIPCIÓN: Convierte una temperatura de Celsius a Fahrenheit
 * PARÁMETROS: No recibe parámetros (obtiene el valor del HTML)
 * RETORNA: No retorna nada
 *
 * FÓRMULA: Fahrenheit = (Celsius × 9/5) + 32
 *
 * EJEMPLOS:
 * - 0°C = 32°F (punto de congelación del agua)
 * - 100°C = 212°F (punto de ebullición del agua)
 * - 37°C = 98.6°F (temperatura corporal)
 *
 * NOTA SOBRE LA FÓRMULA:
 * (valor1 * 9/5) + 32
 * - Primero multiplica por 9/5 (que es 1.8)
 * - Luego suma 32
 * Si cambias 9/5 a 1.8, es lo mismo
 * Si cambias 32 a 0, la fórmula será incorrecta
 */
convertir=function(){
    // Obtén el valor de Celsius del campo de entrada txtValor1
    let valor1 = document.getElementById("txtValor1").value;

    // Aplica la fórmula de conversión: (Celsius × 9/5) + 32
    // valor1 es una cadena (string) pero JavaScript la convierte automáticamente a número
    let resultado = (valor1 * 9/5) + 32;

    // Muestra el resultado en el elemento lblResultado
    // Usa .innerHTML para actualizar el HTML
    // Muestra: "Resultado: [número] FAHRENHEIT"
    document.getElementById("lblResultado").innerHTML = "Resultado: " + resultado + "  FAHRENHEIT";
}


