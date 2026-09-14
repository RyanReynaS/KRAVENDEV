/**
 * ====================================
 * ARCHIVO: calculadora.js
 * PROPÓSITO: Funciones para realizar operaciones matemáticas básicas (suma, resta, multiplicación, división)
 * y una función para limpiar los campos de entrada y resultado
 * Demuestra interacción con elementos HTML y manipulación del DOM
 * ====================================
 */

/**
 * FUNCIÓN: sumar
 * DESCRIPCIÓN: Lee dos valores de cajas de texto, los suma y muestra el resultado
 * PARÁMETROS: No recibe parámetros (obtiene los valores directamente del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO PASO A PASO:
 * 1. Obtiene la referencia al elemento HTML con id="txtValor1"
 * 2. Lee el valor del primer campo de entrada
 * 3. Obtiene la referencia al elemento HTML con id="txtValor2"
 * 4. Lee el valor del segundo campo de entrada
 * 5. Convierte ambos valores a números enteros usando parseInt()
 * 6. Suma los dos números
 * 7. Muestra el resultado en el elemento con id="lblResultado"
 *
 * NOTA IMPORTANTE:
 * - Los valores de un campo de texto siempre son strings (texto)
 * - parseInt() convierte un string a número entero
 * - Sin parseInt(), estarías concatenando strings en lugar de sumarlos
 *   Ejemplo: "5" + "3" = "53" (concatenación) en lugar de 5 + 3 = 8 (suma)
 */
sumar=function(){
    // Declare variables para almacenar referencias a elementos HTML y valores
    let cmpCaja1;      // Referencia al elemento HTML del primer campo de entrada
    let valor1;        // (No se usa, probablemente fue un error al escribir el código)
    let cmpCaja2;      // Referencia al elemento HTML del segundo campo de entrada
    let valor2;        // (No se usa, probablemente fue un error al escribir el código)
    let resultado;     // Variable para almacenar el resultado de la suma
    let valor1Entero;  // Valor del primer campo como número entero
    let valor2Entero;  // Valor del segundo campo como número entero
    let cmpResultado;  // Referencia al elemento HTML donde mostrar el resultado

    // PASO 1: Recuperar el valor de la primera caja de texto
    // Obtén la referencia al elemento con id="txtValor1" (primer campo de entrada)
    cmpCaja1=document.getElementById("txtValor1");
    // Extrae el valor de ese elemento (será un string, por ejemplo "5")
    valor1Entero=cmpCaja1.value;

    // PASO 2: Recuperar el valor de la segunda caja de texto
    // Obtén la referencia al elemento con id="txtValor2" (segundo campo de entrada)
    cmpCaja2=document.getElementById("txtValor2");
    // Extrae el valor de ese elemento (será un string, por ejemplo "3")
    valor2Entero=cmpCaja2.value;

    // PASO 3: Transformar los valores a números enteros
    // parseInt() convierte un string a número entero
    // Si escribiste "5", se convierte en el número 5
    // Si escribiste "5.7", parseInt lo convierte en 5 (elimina decimales)
    valor1Entero=parseInt(valor1Entero);
    valor2Entero=parseInt(valor2Entero);

    // PASO 4: Sumar los dos valores
    // Ahora que son números, el operador + suma
    // 5 + 3 = 8
    resultado=valor1Entero+valor2Entero;

    // PASO 5: Mostrar el valor en pantalla
    // Obtén la referencia al elemento donde mostrar el resultado (id="lblResultado")
    cmpResultado=document.getElementById("lblResultado");
    // Cambia el texto del elemento a mostrar "Resultado: " seguido del resultado
    // Por ejemplo, si resultado es 8, mostrará "Resultado: 8"
    cmpResultado.innerText="Resultado: "+resultado;
}

/**
 * FUNCIÓN: restar
 * DESCRIPCIÓN: Lee dos valores de cajas de texto, los resta y muestra el resultado
 * PARÁMETROS: No recibe parámetros (obtiene los valores directamente del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO: Similar a sumar(), pero usa el operador - en lugar de +
 * PASOS:
 * 1. Obtiene el primer valor de txtValor1
 * 2. Obtiene el segundo valor de txtValor2
 * 3. Convierte ambos a números enteros
 * 4. Resta: valor1Entero - valor2Entero
 * 5. Muestra el resultado en lblResultado
 *
 * EJEMPLO:
 * Si escribiste 10 en el primer campo y 3 en el segundo:
 * resultado = 10 - 3 = 7
 * Se mostrará: "Resultado: 7"
 */
restar=function(){
    let cmpCaja1;      // Referencia al primer campo de entrada
    let valor1;        // (No se usa)
    let cmpCaja2;      // Referencia al segundo campo de entrada
    let valor2;        // (No se usa)
    let resultado;     // Variable para almacenar el resultado de la resta
    let valor1Entero;  // Valor del primer campo como número entero
    let valor2Entero;  // Valor del segundo campo como número entero
    let cmpResultado;  // Referencia al elemento donde mostrar el resultado

    // Paso 1: Obtener el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1Entero=cmpCaja1.value;

    // Paso 2: Obtener el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2Entero=cmpCaja2.value;

    // Paso 3: Convertir los valores a números enteros
    valor1Entero=parseInt(valor1Entero);
    valor2Entero=parseInt(valor2Entero);

    // Paso 4: Restar los dos valores
    // El operador - realiza la resta
    resultado=valor1Entero-valor2Entero;

    // Paso 5: Mostrar el resultado en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado: "+resultado;
}

/**
 * FUNCIÓN: dividir
 * DESCRIPCIÓN: Lee dos valores de cajas de texto, los divide y muestra el resultado
 * PARÁMETROS: No recibe parámetros (obtiene los valores directamente del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO: Similar a sumar(), pero usa el operador / en lugar de +
 * PASOS:
 * 1. Obtiene el primer valor de txtValor1
 * 2. Obtiene el segundo valor de txtValor2
 * 3. Convierte ambos a números enteros
 * 4. Divide: valor1Entero / valor2Entero
 * 5. Muestra el resultado en lblResultado
 *
 * EJEMPLO:
 * Si escribiste 20 en el primer campo y 4 en el segundo:
 * resultado = 20 / 4 = 5
 * Se mostrará: "Resultado: 5"
 *
 * ADVERTENCIA IMPORTANTE:
 * Si divides entre 0, obtendrás "Infinity" (infinito)
 * No hay validación en este código, así que si escribes 0 en el segundo campo, verás "Resultado: Infinity"
 */
dividir=function(){
    let cmpCaja1;      // Referencia al primer campo de entrada
    let valor1;        // (No se usa)
    let cmpCaja2;      // Referencia al segundo campo de entrada
    let valor2;        // (No se usa)
    let resultado;     // Variable para almacenar el resultado de la división
    let valor1Entero;  // Valor del primer campo como número entero
    let valor2Entero;  // Valor del segundo campo como número entero
    let cmpResultado;  // Referencia al elemento donde mostrar el resultado

    // Paso 1: Obtener el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1Entero=cmpCaja1.value;

    // Paso 2: Obtener el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2Entero=cmpCaja2.value;

    // Paso 3: Convertir los valores a números enteros
    valor1Entero=parseInt(valor1Entero);
    valor2Entero=parseInt(valor2Entero);

    // Paso 4: Dividir los dos valores
    // El operador / realiza la división
    resultado=valor1Entero/valor2Entero;

    // Paso 5: Mostrar el resultado en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado: "+resultado;
}

/**
 * FUNCIÓN: multiplicar
 * DESCRIPCIÓN: Lee dos valores de cajas de texto, los multiplica y muestra el resultado
 * PARÁMETROS: No recibe parámetros (obtiene los valores directamente del HTML)
 * RETORNA: No retorna nada
 *
 * FLUJO: Similar a sumar(), pero usa el operador * en lugar de +
 * PASOS:
 * 1. Obtiene el primer valor de txtValor1
 * 2. Obtiene el segundo valor de txtValor2
 * 3. Convierte ambos a números enteros
 * 4. Multiplica: valor1Entero * valor2Entero
 * 5. Muestra el resultado en lblResultado
 *
 * EJEMPLO:
 * Si escribiste 6 en el primer campo y 7 en el segundo:
 * resultado = 6 * 7 = 42
 * Se mostrará: "Resultado: 42"
 */
multiplicar=function(){
    let cmpCaja1;      // Referencia al primer campo de entrada
    let valor1;        // (No se usa)
    let cmpCaja2;      // Referencia al segundo campo de entrada
    let valor2;        // (No se usa)
    let resultado;     // Variable para almacenar el resultado de la multiplicación
    let valor1Entero;  // Valor del primer campo como número entero
    let valor2Entero;  // Valor del segundo campo como número entero
    let cmpResultado;  // Referencia al elemento donde mostrar el resultado

    // Paso 1: Obtener el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1Entero=cmpCaja1.value;

    // Paso 2: Obtener el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2Entero=cmpCaja2.value;

    // Paso 3: Convertir los valores a números enteros
    valor1Entero=parseInt(valor1Entero);
    valor2Entero=parseInt(valor2Entero);

    // Paso 4: Multiplicar los dos valores
    // El operador * realiza la multiplicación
    resultado=valor1Entero*valor2Entero;

    // Paso 5: Mostrar el resultado en pantalla
    cmpResultado=document.getElementById("lblResultado");
    cmpResultado.innerText="Resultado: "+resultado;
}

/**
 * FUNCIÓN: limpiar
 * DESCRIPCIÓN: Borra los valores de los campos de entrada y el resultado
 * PARÁMETROS: No recibe parámetros
 * RETORNA: No retorna nada
 *
 * PROPÓSITO: Resetear la calculadora para un nuevo cálculo
 * PASOS:
 * 1. Establece el valor del primer campo de entrada a 0
 * 2. Establece el valor del segundo campo de entrada a 0
 * 3. Borra el texto del resultado (muestra "Resultado: " sin número)
 *
 * EJEMPLO:
 * Antes de hacer clic en LIMPIAR:
 * - txtValor1 podría tener: 5
 * - txtValor2 podría tener: 3
 * - lblResultado podría mostrar: Resultado: 8
 *
 * Después de hacer clic en LIMPIAR:
 * - txtValor1 tiene: 0
 * - txtValor2 tiene: 0
 * - lblResultado muestra: Resultado:
 */
limpiar=function(){

    // Paso 1: Limpiar el primer campo de entrada
    // Obtén la referencia al elemento txtValor1
    document.getElementById/("txtValor1");
    cmpCaja1=document.getElementById("txtValor1");
    // Establece su valor a 0 (lo borra)
    cmpCaja1.value=0


    // Paso 2: Limpiar el segundo campo de entrada
    // Obtén la referencia al elemento txtValor2
    document.getElementById("txtValor2");
    cmpCaja2=document.getElementById("txtValor2");
    // Establece su valor a 0 (lo borra)
    cmpCaja2.value=0


    // Paso 3: Limpiar el resultado
    // Obtén la referencia al elemento lblResultado (donde se muestra el resultado)
    cmpResultado=document.getElementById("lblResultado");
    // Establece el texto a "Resultado: " sin número
    cmpResultado.innerText="Resultado: " + "";




}

