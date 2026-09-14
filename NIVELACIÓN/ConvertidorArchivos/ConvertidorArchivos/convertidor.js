convertirEnPesosMx = function (dolares) {
    let pesosMexicanos;
    pesosMexicanos = dolares * 18.5;
    return pesosMexicanos;
}

convertirEnEuros = function (dolares) {
    let euros;
    euros = dolares * 0.92;
    return euros;
}

convertirEnPesosColombianos = function (dolares) {
    let pesosColombianos;
    pesosColombianos = dolares * 5000;
    return pesosColombianos;
}

mostrarPesosCol=function (){
    let cmpValor;
    let valor;
    let valorFloat;
    let valorPesosColombianos;
    let cmpResultado;
    let resultadoFormateado;
    let cmpMoneda;
    let cmpImagenBandera;

    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorPesosColombianos = convertirEnPesosColombianos(valorFloat);

    resultadoFormateado = valorPesosColombianos.toFixed(2);


    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFormateado;

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "Pesos Colombianos";

    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src = "banderaColombia.png";
}

mostrarEuros=function (){
   let cmpValor;
    let valor;
    let valorFloat;
    let valorEuros;
    let cmpResultado;
    let resultadoFormateado;
    let cmpMoneda;
    let cmpImagenBandera;

    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorEuros = convertirEnEuros(valorFloat);

    resultadoFormateado = valorEuros.toFixed(2);


    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFormateado;

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "Euros";

    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src = "unionEuropea.jpg";
}   

mostrarPesosMx=function (){
    let cmpValor;
    let valor;
    let valorFloat;
    let valorPesosMexicanos;
    let cmpResultado;
    let resultadoFormateado;
    let cmpMoneda;
    let cmpImagenBandera;

    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorPesosMexicanos = convertirEnPesosMx(valorFloat);

    resultadoFormateado = valorPesosMexicanos.toFixed(2);


    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFormateado;

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "Pesos Mexicanos";

    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src = "banderaMx.png";
}