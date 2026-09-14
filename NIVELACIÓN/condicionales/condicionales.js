// ============================================
// EJERCICIOS CONDICIONALES
// ============================================

// -----------------------------------------------------
// 1. calcularTasaInteres
// Retorna la tasa de interés según el ingreso anual de la empresa
// -----------------------------------------------------
function calcularTasaInteres(ingresoAnual) {
    let tasa;

    if (ingresoAnual < 300000) {
        tasa = 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 13;
    } else {
        // 2 000 000 o más
        tasa = 12;
    }

    return tasa;
}


// -----------------------------------------------------
// 2. calcularCapacidadPago
// Calcula la cuota mensual que puede pagar un cliente
// -----------------------------------------------------
function calcularCapacidadPago(edad, ingresos, egresos) {
    let sobrante;
    let capacidad;

    sobrante = ingresos - egresos;

    if (edad > 50) {
        capacidad = sobrante * 0.30;
    } else {
        // hasta 50 años (incluye 50)
        capacidad = sobrante * 0.40;
    }

    return capacidad;
}


// -----------------------------------------------------
// 3. calcularDescuento
// Calcula el valor a pagar luego de aplicar el descuento
// -----------------------------------------------------
function calcularDescuento(precio, cantidad) {
    let porcentajeDescuento;
    let valorDescuento;
    let valorAPagar;

    if (cantidad < 3) {
        porcentajeDescuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        porcentajeDescuento = 2;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentajeDescuento = 3;
    } else {
        // 12 o más
        porcentajeDescuento = 4;
    }

    valorDescuento = precio * (porcentajeDescuento / 100);
    valorAPagar = precio - valorDescuento;

    return valorAPagar;
}


// -----------------------------------------------------
// 4. determinarColesterolLDL
// Determina la categoría de colesterol LDL
// Rangos de referencia (medlineplus.gov):
// Óptimo: menos de 100
// Casi óptimo: 100 - 129
// Límite alto: 130 - 159
// Alto: 160 - 189
// Muy alto: 190 o más
// -----------------------------------------------------
function determinarColesterolLDL(nivelColesterol) {
    let categoria;

    if (nivelColesterol < 100) {
        categoria = "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        categoria = "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        categoria = "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        categoria = "Alto";
    } else {
        categoria = "Muy alto";
    }

    return categoria;
}


// -----------------------------------------------------
// 5. validarClave
// Valida que la clave tenga entre 8 y 16 caracteres
// -----------------------------------------------------
function validarClave(clave) {
    let esValida;

    if (clave.length >= 8 && clave.length <= 16) {
        esValida = true;
    } else {
        esValida = false;
    }

    return esValida;
}


// -----------------------------------------------------
// 6. esMayuscula
// Determina si el carácter es una letra mayúscula (sin tilde)
// Rango ASCII de mayúsculas: 65 (A) a 90 (Z)
// -----------------------------------------------------
function esMayuscula(caracter) {
    let codigoAscii;
    let esMayus;

    codigoAscii = caracter.charCodeAt(0);

    if (codigoAscii >= 65 && codigoAscii <= 90) {
        esMayus = true;
    } else {
        esMayus = false;
    }

    return esMayus;
}


// -----------------------------------------------------
// 7. esMinuscula
// Determina si el carácter es una letra minúscula
// Rango ASCII de minúsculas: 97 (a) a 122 (z)
// Se consideran además las minúsculas con tilde: á é í ó ú ñ ü
// -----------------------------------------------------
function esMinuscula(caracter) {
    let codigoAscii;
    let esMinus;

    codigoAscii = caracter.charCodeAt(0);

    if ((codigoAscii >= 97 && codigoAscii <= 122) ||
        caracter === "á" || caracter === "é" || caracter === "í" ||
        caracter === "ó" || caracter === "ú" || caracter === "ñ" ||
        caracter === "ü") {
        esMinus = true;
    } else {
        esMinus = false;
    }

    return esMinus;
}


// -----------------------------------------------------
// 8. esDigito
// Determina si el carácter es un dígito
// Rango ASCII de dígitos: 48 (0) a 57 (9)
// -----------------------------------------------------
function esDigito(caracter) {
    let codigoAscii;
    let esDig;

    codigoAscii = caracter.charCodeAt(0);

    if (codigoAscii >= 48 && codigoAscii <= 57) {
        esDig = true;
    } else {
        esDig = false;
    }

    return esDig;
}


// -----------------------------------------------------
// 9. darPermiso
// Puede salir si saca más de 90 en CUALQUIERA de las tres materias
// -----------------------------------------------------
function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    let tienePermiso;

    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        tienePermiso = true;
    } else {
        tienePermiso = false;
    }

    return tienePermiso;
}


// -----------------------------------------------------
// 10. otorgarPermiso
// Puede salir si saca más de 90 en Matemática O Física, Y además más de 80 en Geometría
// -----------------------------------------------------
function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
    let tienePermiso;

    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        tienePermiso = true;
    } else {
        tienePermiso = false;
    }

    return tienePermiso;
}


// -----------------------------------------------------
// 11. dejarSalir
// Puede salir si saca más de 90 en Matemática, Física o Geometría
// Y ADEMÁS la nota de Física es mayor a la de Matemática
// -----------------------------------------------------
function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
    let tienePermiso;

    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) &&
        (notaFisica > notaMatematica)) {
        tienePermiso = true;
    } else {
        tienePermiso = false;
    }

    return tienePermiso;
}


// ============================================
// PRUEBAS (puedes descomentar para probar en consola)
// ============================================

// console.log(calcularTasaInteres(250000));   // 16
// console.log(calcularTasaInteres(450000));   // 15
// console.log(calcularTasaInteres(2000000));  // 12

// console.log(calcularCapacidadPago(55, 2000, 800)); // 30% de 1200 = 360
// console.log(calcularCapacidadPago(40, 2000, 800)); // 40% de 1200 = 480

// console.log(calcularDescuento(100, 2));  // 100 (sin descuento)
// console.log(calcularDescuento(100, 4));  // 98  (2%)
// console.log(calcularDescuento(100, 8));  // 97  (3%)
// console.log(calcularDescuento(100, 15)); // 96  (4%)

// console.log(determinarColesterolLDL(90));  // Óptimo
// console.log(determinarColesterolLDL(150)); // Límite alto

// console.log(validarClave("1234567"));       // false (7 caracteres)
// console.log(validarClave("12345678"));      // true  (8 caracteres)
// console.log(validarClave("1234567890123456")); // true (16 caracteres)
// console.log(validarClave("12345678901234567")); // false (17 caracteres)

// console.log(esMayuscula("A")); // true
// console.log(esMayuscula("a")); // false
// console.log(esMinuscula("a")); // true
// console.log(esMinuscula("á")); // true
// console.log(esDigito("7"));    // true
// console.log(esDigito("a"));    // false

// console.log(darPermiso(95, 60, 60));      // true
// console.log(darPermiso(80, 60, 60));      // false
// console.log(otorgarPermiso(95, 60, 85));  // true
// console.log(otorgarPermiso(95, 60, 75));  // false
// console.log(dejarSalir(85, 95, 60));      // true (95>90 y 95>85)
// console.log(dejarSalir(95, 85, 60));      // false (95>90 pero 85 no es > 95)