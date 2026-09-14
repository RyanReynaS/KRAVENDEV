// FUNCIÓN: calcularUtilidad - Calcula ganancia (ingresos - gastos)
calcularUtilidad=function(ingresos,gastos){
    let resultadoUtilidad;
    resultadoUtilidad=ingresos-gastos;  // Resta gastos de ingresos
    return resultadoUtilidad;  // Retorna el resultado
}

// FUNCIÓN: ejecutarUtilidad - Obtiene ingresos/gastos del HTML y calcula
ejecutarUtilidad=function(){
    // Obtiene valores de entrada
    let cmpIngresos=document.getElementById("textIngresos")
    let ingresos=cmpIngresos.value;
    let ingresosEntero=parseInt(ingresos);

    let cmpEgresos=document.getElementById("textEgresos")
    let egresos=cmpEgresos.value;
    let egresosEntero=parseInt(egresos);

    // Llama función que retorna utilidad
    let utilidad=calcularUtilidad(ingresosEntero, egresosEntero);

    // Muestra resultado
    console.log("La utilidad es "+utilidad);
    let cmpUtilidad=document.getElementById("lblUtilidad")
    cmpUtilidad.innerText=utilidad;
}