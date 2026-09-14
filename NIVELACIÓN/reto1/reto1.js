probar = function(){
   var areaRectangulo = calcularAreaRectangulo(10,5);
   console.log("area Rectangulo: "+areaRectangulo);
   var areaCuadrado = calcularAreaCuadrado(8);
   console.log("area Cuadrado: "+areaCuadrado);
   var perimetroRectangulo = calcularPerimetroRectangulo(10,5);
   console.log("perimetro Rectangulo: "+perimetroRectangulo);
   var perimetroCuadrado = calcularPerimetroCuadrado(8);
   console.log("perimetro Cuadrado: "+perimetroCuadrado);
   var promedio=calcularPromedio(10,20,15,15);
   console.log("promedio:"+promedio);

}


calcularAreaRectangulo = function (base, altura) {
    let area;
    area = base * altura;
    return area;
}
calcularAreaCuadrado = function (lado) {
    let area;
    area = lado * lado;
    return area;
}
calcularPerimetroRectangulo = function (base, altura) {
    let perimetro;
    perimetro = 2 * (base + altura);
    return perimetro;
}
calcularPerimetroCuadrado = function (lado) {
    let perimetro;
    perimetro = 4 * lado;
    return perimetro;
}   
calcularPromedio = function (num1, num2, num3, num4) {
    let promedio;
    promedio = (num1 + num2 + num3 + num4) / 4;
    return promedio;
}
