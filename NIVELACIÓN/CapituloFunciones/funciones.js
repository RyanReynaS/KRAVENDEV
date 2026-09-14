/**
 * ARCHIVO: funciones.js - Sistema de saludo con múltiples parámetros
 * Demuestra funciones con 0, 1, 2 y 3 parámetros
 */

// Función sin parámetros
saludar=function(){
    console.log("hola")
}

// Función con 1 parámetro (name)
saludarpersona=function(name){
    console.log("hola" +name)
}

// Función con 2 parámetros (nombre, alias)
saludarjugador=function(nombre,alias){
console.log("hola" +nombre+ " " +alias)
}

// Función con 3 parámetros (nombre, apellido, alias)
saludaramigo=function(nombre,apellido,alias){
     console.log("hola"+ " "+nombre+" "+apellido+" "+alias)
}



// Obtiene 3 valores del HTML y los pasa a saludaramigo()
testSaludarAmigo=function(){
    let cmpNombre, nombre, cmpAlias, alias, cmpApellido, apellido;
    cmpNombre=document.getElementById("txtNombre");
    cmpAlias=document.getElementById("txtAlias");
    cmpApellido=document.getElementById("txtApellido")
    nombre=cmpNombre.value;
    alias=cmpAlias.value;
    apellido=cmpApellido.value;
    // Llama a saludaramigo con 3 argumentos
    saludaramigo(nombre,alias,apellido);
}

// Obtiene 2 valores y los pasa a saludarjugador()
probarSaludarJugador=function(){
    let cmpNombre, nombre, cmpAlias, alias;
    cmpNombre=document.getElementById("txtNombre");
    cmpAlias=document.getElementById("txtAlias");
    nombre=cmpNombre.value;
    alias=cmpAlias.value;
    // Llama a saludarjugador con 2 argumentos
    saludarjugador(nombre,alias);
}

// Obtiene 1 valor y lo pasa a saludarpersona()
probarSaludarPersona=function(){
    let cmpNombre, nombre;
    cmpNombre=document.getElementById("txtNombre");
    nombre=cmpNombre.value;
    // Llama a saludarpersona con 1 argumento
    saludarpersona(nombre);
}
    