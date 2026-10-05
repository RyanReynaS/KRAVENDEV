
/**
 * FUNCIÓN: generarTablas()
 *
 * Propósito: Generar dinámicamente la tabla de multiplicación del número seleccionado
 *
 * Pasos:
 * 1. Obtiene el contenedor (tbody) donde se insertarán las filas
 * 2. Lee el número ingresado en la caja de texto
 * 3. Si no hay número, usa 3 como valor por defecto
 * 4. Valida que el número esté entre 1 y 10
 * 5. Crea un loop (for) que genera 10 filas de multiplicación
 * 6. Cada fila contiene: operación (ej: 3 × 5) y resultado (ej: 15)
 * 7. Reemplaza el contenido del tbody con las nuevas filas
 */
function generarTablas() {
     // Obtener el elemento tbody donde irán las filas
     let contenedor = document.getElementById("tabla-body");

     // Obtener el input donde el usuario escribe el número
     let inputNumero = document.getElementById("numero-tabla");

     // Leer el valor del input (si está vacío, usar 3 como default)
     let numero = inputNumero.value || 3;

     // Validar que el número esté en el rango permitido (1-10)
     if (numero < 1 || numero > 10) {
          alert("Por favor ingresa un número entre 1 y 10");
          return;
     }

     // Variable para construir el HTML de la tabla
     let contenido = "";

     // Loop: crear 10 filas con las multiplicaciones del número seleccionado
     for (let i = 1; i <= 10; i++) {
          // Concatenar HTML: <tr><td>operación</td><td>resultado</td></tr>
          // Ejemplo: <tr><td>3 × 5</td><td>15</td></tr>
          contenido += "<tr><td>" + numero + " × " + i + "</td><td>" + (numero * i) + "</td></tr>";
     }

     // Reemplazar el contenido del tbody con las nuevas filas generadas
     contenedor.innerHTML = contenido;
}
