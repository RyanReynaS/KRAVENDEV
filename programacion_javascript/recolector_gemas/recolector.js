// ==========================================
// ARCHIVO: recolector.js
// JUEGO: Recolector de Gemas
// ==========================================
// Este archivo contiene la lógica completa del juego donde el jugador
// debe recolectar gemas rojas evitando trampas verdes pequeñas.
// El jugador tiene 60 segundos y 3 vidas para recolectar 6 gemas y ganar.

// ==========================================
// OBTENER ELEMENTOS DEL DOM Y CONTEXTO
// ==========================================
// Obtener el elemento canvas (área donde se dibuja el juego)
let canvas = document.getElementById("areaJuego");
// Obtener el contexto 2D para poder dibujar en el canvas
let ctx = canvas.getContext("2d");

// ==========================================
// DIMENSIONES DEL PERSONAJE
// ==========================================
// Ancho del personaje en píxeles (40 = personaje de tamaño mediano)
const ANCHO_PERSONAJE = 40;
// Alto del personaje en píxeles
const ALTO_PERSONAJE = 40;
// Posición X del personaje (comienza en el centro)
let personajeX = 0;
// Posición Y del personaje (comienza en el centro)
let personajeY = 0;

// ==========================================
// DIMENSIONES DE LA GEMA (lo que debes recolectar)
// ==========================================
// Ancho de la gema en píxeles (15 = gema pequeña)
const ANCHO_GEMA = 15;
// Alto de la gema en píxeles
const ALTO_GEMA = 15;
// Posición X de la gema
let gemaX = 0;
// Posición Y de la gema
let gemaY = 0;
// Contador de gemas recolectadas
let puntaje = 0;

// ==========================================
// DIMENSIONES DE LA TRAMPA (lo que debes evitar)
// ==========================================
// Ancho de la trampa en píxeles (3 = trampa muy pequeña, casi invisible)
const ANCHO_TRAMPA = 3;
// Alto de la trampa en píxeles
const ALTO_TRAMPA = 3;
// Posición X de la trampa
let trampaX = 3;
// Posición Y de la trampa
let trampaY = 3;
// Número de vidas restantes (empieza con 3)
let vidas = 3;

// ==========================================
// VARIABLES DE TIEMPO Y CONTROL
// ==========================================
// Tiempo restante en segundos (60 segundos = 1 minuto para jugar)
let tiempo = 60;
// Variable para almacenar el intervalo (se usa para pausar o reiniciar)
let intervaloJuego;

// ==========================================
// FUNCIÓN: Iniciar el juego
// ==========================================
// Se ejecuta al cargar la página (onload="iniciarJuego()")
// Configura las posiciones iniciales y empieza la cuenta regresiva
function iniciarJuego(){
    // Posicionar al personaje en el centro del canvas
    // canvas.width / 2 - ANCHO_PERSONAJE / 2 centra el personaje horizontalmente
    personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
    // canvas.height / 2 - ALTO_PERSONAJE / 2 centra el personaje verticalmente
    personajeY = canvas.height / 2 - ALTO_PERSONAJE / 2;

    // Limpiar cualquier intervalo anterior para evitar errores
    clearInterval(intervaloJuego);
    // setInterval ejecuta restarTiempo cada 1000 milisegundos (1 segundo)
    intervaloJuego = setInterval(restarTiempo, 1000);

    // Limpiar el canvas y dibujar elementos iniciales
    limpiarCanva();
    dibujarPersonaje();
    dibujarGema();
    dibujarTrampa();
}

// ==========================================
// FUNCIÓN: Dibujar el personaje
// ==========================================
// Dibuja un rectángulo azul que representa al jugador
function dibujarPersonaje(){
    // "#0000FF" o "blue" = color azul para el personaje
    ctx.fillStyle = "blue";
    // Dibuja un rectángulo en la posición del personaje
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTO_PERSONAJE);
}

// ==========================================
// FUNCIÓN: Limpiar canvas
// ==========================================
// Borra todo lo dibujado en el canvas (lo deja en blanco)
function limpiarCanva(){
    // clearRect borra un rectángulo del canvas
    // (0, 0, canvas.width, canvas.height) borra TODO el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ==========================================
// FUNCIONES DE MOVIMIENTO
// ==========================================
// Cada función de movimiento:
// 1. Cambia la posición del personaje (suma o resta 10 píxeles)
// 2. Limpia el canvas
// 3. Redibuja todos los elementos
// 4. Verifica colisiones con gema y trampa

// El número 10 es la velocidad:
// - Si cambias a 5: el personaje se mueve más lento
// - Si cambias a 20: el personaje se mueve más rápido

// Función para mover el personaje a la izquierda
function moverIzquierda(){
    personajeX -= 10;  // Restar mueve a la izquierda
    limpiarCanva();
    dibujarPersonaje();
    dibujarGema();
    dibujarTrampa();
    detectarColisionGema();
    detectarColisionTrampa();
}

// Función para mover el personaje a la derecha
function moverDerecha(){
    personajeX += 10;  // Sumar mueve a la derecha
    limpiarCanva();
    dibujarPersonaje();
    dibujarGema();
    dibujarTrampa();
    detectarColisionGema();
    detectarColisionTrampa();
}

// Función para mover el personaje hacia arriba
function moverArriba(){
    personajeY -= 10;  // Restar Y mueve hacia arriba
    limpiarCanva();
    dibujarPersonaje();
    dibujarGema();
    dibujarTrampa();
    detectarColisionGema();
    detectarColisionTrampa();
}

// Función para mover el personaje hacia abajo
function moverAbajo(){
    personajeY += 10;  // Sumar Y mueve hacia abajo
    limpiarCanva();
    dibujarPersonaje();
    dibujarGema();
    dibujarTrampa();
    detectarColisionGema();
    detectarColisionTrampa();
}

// ==========================================
// FUNCIÓN: Dibujar la gema
// ==========================================
// Dibuja un pequeño rectángulo rojo que representa la gema que debes recolectar
function dibujarGema(){
    // "red" o "#FF0000" = color rojo para la gema
    ctx.fillStyle = "red";
    // Dibuja un rectángulo pequeño (15x15 píxeles)
    ctx.fillRect(gemaX, gemaY, ANCHO_GEMA, ALTO_GEMA);
}

// ==========================================
// FUNCIÓN: Generar número aleatorio
// ==========================================
// Genera un número ENTERO aleatorio entre dos valores (inclusivos)
// Se usa para posicionar la gema y la trampa en coordenadas aleatorias
function generarAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==========================================
// FUNCIÓN: Hacer aparecer la gema
// ==========================================
// Crea una nueva gema en una posición aleatoria dentro del canvas
function aparecerGema(){
    // Generar posición X aleatoria (asegura que la gema cabe dentro del canvas)
    gemaX = generarAleatorio(0, canvas.width - ANCHO_GEMA);
    // Generar posición Y aleatoria
    gemaY = generarAleatorio(0, canvas.height - ALTO_GEMA);
    // Redibujar la gema en su nueva posición
    dibujarGema();
}

// ==========================================
// FUNCIÓN: Detectar colisión con gema
// ==========================================
// Verifica si el personaje toca una gema usando lógica de colisiones
// Si lo hace: suma puntos y verifica si ganó
function detectarColisionGema(){
    // Colisión en eje X (horizontal)
    let colisionX = personajeX < gemaX + ANCHO_GEMA && personajeX + ANCHO_PERSONAJE > gemaX;

    // Colisión en eje Y (vertical)
    let colisionY = personajeY < gemaY + ALTO_GEMA && personajeY + ALTO_PERSONAJE > gemaY;

    // Si hay colisión en ambos ejes, el personaje tocó la gema
    if (colisionX && colisionY){
        // Sumar 1 punto
        puntaje = puntaje + 1;
        // Actualizar el puntaje en el HTML
        document.getElementById("txtPuntaje").textContent = puntaje;
        // Hacer aparecer una nueva gema
        aparecerGema();

        // GANAR: Si recolectas 6 gemas, ¡ganaste!
        if (puntaje >= 6) {
            // Detener la cuenta regresiva
            clearInterval(intervaloJuego);
            // Mostrar mensaje de victoria
            alert("¡GANASTE! Has alcanzado 6 puntos.");
        }
    }
}

// ==========================================
// FUNCIÓN: Dibujar la trampa
// ==========================================
// Dibuja un pequeño rectángulo verde que representa una trampa
// Las trampas son muy pequeñas (3x3 píxeles), lo que las hace difíciles de ver
function dibujarTrampa(){
    // "green" o "#00FF00" = color verde para la trampa
    ctx.fillStyle = "green";
    // Dibuja un rectángulo MUY pequeño (3x3 píxeles)
    ctx.fillRect(trampaX, trampaY, ANCHO_TRAMPA, ALTO_TRAMPA);
}

// ==========================================
// FUNCIÓN: Hacer aparecer la trampa
// ==========================================
// Crea una nueva trampa en una posición aleatoria dentro del canvas
function aparecerTrampa(){
    // Generar posición X aleatoria
    trampaX = generarAleatorio(0, canvas.width - ANCHO_TRAMPA);
    // Generar posición Y aleatoria
    trampaY = generarAleatorio(0, canvas.height - ALTO_TRAMPA);
    // Redibujar la trampa en su nueva posición
    dibujarTrampa();
}

// ==========================================
// FUNCIÓN: Detectar colisión con trampa
// ==========================================
// Verifica si el personaje toca una trampa
// Si lo hace: resta una vida y verifica si perdió
function detectarColisionTrampa(){
    // Colisión en eje X (horizontal)
    let colisionX = personajeX < trampaX + ANCHO_TRAMPA && personajeX + ANCHO_PERSONAJE > trampaX;

    // Colisión en eje Y (vertical)
    let colisionY = personajeY < trampaY + ALTO_TRAMPA && personajeY + ALTO_PERSONAJE > trampaY;

    // Si hay colisión en ambos ejes, el personaje tocó la trampa
    if (colisionX && colisionY){
        // Restar una vida
        vidas = vidas - 1;
        // Actualizar las vidas en el HTML
        document.getElementById("txtVidas").textContent = vidas;
        // Hacer aparecer una nueva trampa
        aparecerTrampa();

        // PERDER: Si se acaban las vidas, game over
        if (vidas <= 0) {
            // Detener la cuenta regresiva
            clearInterval(intervaloJuego);
            // Mostrar mensaje de derrota
            alert("GAME OVER. Te quedaste sin vidas.");
        }
    }
}

// ==========================================
// FUNCIÓN: Restar tiempo
// ==========================================
// Se ejecuta cada 1 segundo (mediante setInterval)
// Reduce el tiempo disponible y verifica si se acabó
function restarTiempo() {
    // Restar 1 segundo
    tiempo = tiempo - 1;
    // Actualizar el tiempo mostrado en el HTML
    document.getElementById("txtTiempo").textContent = tiempo;

    // PERDER: Si el tiempo llega a 0, game over
    if (tiempo <= 0) {
        // Detener la cuenta regresiva
        clearInterval(intervaloJuego);
        // Mostrar mensaje de tiempo agotado
        alert("¡GAME OVER! Se acabó el tiempo.");
    }
}

// ==========================================
// FUNCIÓN: Reiniciar el juego
// ==========================================
// Reseteá todos los valores y comienza una nueva partida
function reiniciarJuego() {
    // Restaurar valores iniciales
    vidas = 3;
    puntaje = 0;
    tiempo = 60;

    // Actualizar los valores mostrados en el HTML
    document.getElementById("txtPuntaje").textContent = puntaje;
    document.getElementById("txtVidas").textContent = vidas;
    document.getElementById("txtTiempo").textContent = tiempo;

    // Llamar a iniciarJuego para preparar el nuevo juego
    iniciarJuego();
}
