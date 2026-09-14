sumar=function(valor1,valor2){
    let resultado=valor1+valor2;
    return resultado;
}
promediar=function(valor1,valor2){
    let total=valor1+valor2;
    let promedio=total/2;
    return promedio;
}
probar=function(){
    let cmpValor1=document.getElementById("txtValor1");
    valor1=parseFloat(cmpValor1.value);
    let cmpValor2=document.getElementById("txtValor2");
    valor2=parseFloat(cmpValor2.value);
    let suma=sumar(valor1,valor2);
    let cmpSuma=document.getElementById("lblSuma");
    cmpSuma.innerText=suma;
}
mostrarPromedio=function(){
    let cmpValor1=document.getElementById("txtValor1");
    valor1=parseFloat(cmpValor1.value);
    let cmpValor2=document.getElementById("txtValor2");
    valor2=parseFloat(cmpValor2.value);
    let promedio=promediar(valor1,valor2);
    let cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=promedio.toFixed(4);
}