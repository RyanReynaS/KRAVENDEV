jugar=function(){
   lanzarDado();
}

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    numeroEntero = parseInt(numeroMultiplicado) + 1;
    console.log(numeroEntero);

}
    

