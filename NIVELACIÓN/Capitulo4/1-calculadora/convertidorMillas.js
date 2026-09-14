/**
 * ====================================
 * ARCHIVO: convertidorMillas.js
 * PROPÓSITO: Función para convertir millas a kilómetros
 * Demuestra cómo obtener valores de HTML, realizar cálculos y actualizar el HTML con resultados
 * ====================================
 */

/**
 * FUNCIÓN: convertir
 * DESCRIPCIÓN: Convierte el número de millas ingresado en kilómetros y muestra el resultado
 * PARÁMETROS: No recibe parámetros (obtiene el valor directamente del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO:
 * 1. Obtiene el valor del campo de entrada (número de millas)
 * 2. Multiplica ese valor por 1.609 (factor de conversión de millas a km)
 * 3. Muestra el resultado en el elemento lblResultado
 *
 * FACTOR DE CONVERSIÓN:
 * - 1 milla = 1.609 kilómetros
 * - Si escribiste 1 milla, el resultado será 1.609 km
 * - Si escribiste 10 millas, el resultado será 16.09 km
 *
 * NOTA SOBRE EL FACTOR:
 * Si cambias 1.609 a otro número:
 * - 1.609 es la conversión correcta millas → km
 * - 1.0 conversión 1:1 (sin cambios)
 * - 2.0 duplicaría el valor
 * - 0.5 reduciría el valor a la mitad
 */
convertir=function(){
    // Obtén el valor que el usuario escribió en txtValor1 y almacénalo en la variable valor1
    // .value devuelve el contenido del campo de entrada como un string (por ejemplo "5")
    let valor1 = document.getElementById("txtValor1").value;

    // Multiplica el valor por 1.609 para convertir millas a kilómetros
    // Nota: JavaScript automáticamente convierte el string a número para hacer la multiplicación
    // 5 (como string) * 1.609 = 8.045 (como número)
    let resultado = valor1 * 1.609;

    // Actualiza el elemento lblResultado con el texto del resultado
    // .innerHTML permite cambiar el contenido HTML de un elemento
    // Muestra: "Resultado: 8.045 km"
    document.getElementById("lblResultado").innerHTML = "Resultado: " + resultado + " km";
}