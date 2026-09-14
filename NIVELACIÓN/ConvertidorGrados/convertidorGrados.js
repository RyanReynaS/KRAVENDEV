//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit

//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit

convertirCelsiusAFarenheit = function (celsius) {
    let farenheit;
    farenheit = (celsius * 9 / 5) + 32;
    return farenheit;
}

mostrarConversion = function () {
    // 1 y 2. Obtener el componente y recuperar el valor
    let celsius = document.getElementById("txtCelsius").value;
    celsius = parseFloat(celsius);

    // 3. Invocar a la función de conversión
    let farenheit = convertirCelsiusAFarenheit(celsius);
    console.log(celsius + " grados Celsius son " + farenheit + " grados Farenheit");
    
    // 4 y 5. Recuperar el componente lblFarenheit y mostrar el resultado con 2 decimales
    let lblFarenheit = document.getElementById("lblFarenheit");
    lblFarenheit.innerHTML = farenheit.toFixed(2);

    // 7. Cambiar la imagen actual por ok.jpg
    let imgBandera = document.getElementById("imgBandera");
    imgBandera.src = "ok.jpg";
}

reiniciarConversion = function () {
    // 1. Recuperar el componente txtCelsius y limpiar su valor
    let txtCelsius = document.getElementById("txtCelsius");
    txtCelsius.value = "";

    // 2. Recuperar el componente lblFarenheit y mostrar el resultado con 2 decimales
    let lblFarenheit = document.getElementById("lblFarenheit");
    lblFarenheit.innerHTML = "0.00";

    // 3. Cambiar la imagen actual por pensando.jpg
    let imgBandera = document.getElementById("imgBandera");
    imgBandera.src = "pensando.jpg";
}