// FUNCIÓN: freir - Simula freír un alimento y retorna resultado
// Parámetro: alimento (string)
// Retorna: alimento + " frito"
freir=function(alimento){
    let alimentoFrito;
    console.log("Me llega "+alimento);
    console.log("Lo pongo en el sarten")
    console.log("LISTO!!!");
    // Crea string: "POLLO frito"
    alimentoFrito=alimento+" "+"frito";
    return alimentoFrito;  // Retorna el valor
}
// Prueba freir con "POLLO" - imprime resultado
probarFreir=function(){
    let comidaLista;
    freir("POLLO");  // Llama sin guardar retorno
    comidaLista=freir("POLLO");  // Guarda el retorno
    console.log(comidaLista);  // Muestra: "POLLO frito"
}

// Obtiene alimento del HTML y lo fríe
probarFreirComida=function(){
    let cmpComida, comida, resultadoComida;
    cmpComida=document.getElementById("txtAlimento");
    comida=cmpComida.value;
    freir(comida);  // Llama sin usar retorno
    resultadoComida=freir(comida);  // Guarda retorno
    console.log("He recibido"+" " +resultadoComida);
}