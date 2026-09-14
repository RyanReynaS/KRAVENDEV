function calcularPromedioNotas() {
    let nota1 = recuperarFloat("txtNota1");
    let nota2 = recuperarFloat("txtNota2");
    let nota3 = recuperarFloat("txtNota3");

    let promedio = calcularPromedio(nota1, nota2, nota3);

    mostrarTexto("lblPromedio", promedio.toFixed(2));

    // Si el promedio es menor a 5 y mayor a 0 -> REPROBADO
    if (promedio < 5 && promedio > 0) {
        mostrarTexto("lblMensaje", "REPROBADO");
        mostrarImagen("imgResultado", "reprobado.gif");
    }
    // Si el promedio es mayor o igual a 5 y menor o igual a 8 -> BUEN TRABAJO
    else if (promedio >= 5 && promedio <= 8) {
        mostrarTexto("lblMensaje", "BUEN TRABAJO");
        mostrarImagen("imgResultado", "buenTrabajo.gif");
    }
    // Si el promedio es mayor a 8 y menor o igual a 10 -> EXCELENTE
    else if (promedio > 8 && promedio <= 10) {
        mostrarTexto("lblMensaje", "EXCELENTE");
        mostrarImagen("imgResultado", "excelente.gif");
    }
    // Si no cumple ninguna condicion anterior -> DATOS INCORRECTOS
    else {
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
        mostrarImagen("imgResultado", "datosIncorrectos.gif");
    }
}