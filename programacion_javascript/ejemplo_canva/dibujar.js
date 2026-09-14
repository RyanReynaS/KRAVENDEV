// ==========================================
// ARCHIVO: dibujar.js
// EJEMPLO: Dibujar rectángulos en un canvas
// ==========================================
// Este archivo muestra cómo dibujar formas simples (rectángulos)
// en un canvas usando JavaScript. Es un ejemplo básico de cómo
// funciona la biblioteca gráfica de HTML5 Canvas.

// ==========================================
// OBTENER ELEMENTOS DEL DOM
// ==========================================
// Recuperamos el elemento canvas (el área donde se dibuja)
let canvas = document.getElementById('areadibujo');
// Recuperamos el contexto 2D para poder dibujar en el canvas
// El contexto 2D es como la "herramienta" que nos permite dibujar
let ctx = canvas.getContext('2d');

// ==========================================
// FUNCIÓN: Dibujar rectángulo superior
// ==========================================
// Esta función dibuja un rectángulo de color rosa en la mitad superior del canvas
// No recibe parámetros: siempre dibuja en el mismo lugar
function dibujarRectangulo(){
    // Definimos el color de relleno: '#F2AEA2' es un color rosa suave
    // Los colores en hexadecimal comienzan con # seguido de 6 dígitos
    // #F2AEA2 = Rosa (F2=rojo, AE=verde, A2=azul)
    ctx.fillStyle = '#F2AEA2';

    // Dibujamos un rectángulo relleno
    // ctx.fillRect(x, y, ancho, alto) dibuja un rectángulo:
    //   - x: 0 (posición horizontal, desde la izquierda)
    //   - y: 0 (posición vertical, desde arriba)
    //   - ancho: canvas.width (usa todo el ancho del canvas)
    //   - alto: canvas.height/2 (usa la mitad de la altura)
    // Resultado: rectángulo rosa que ocupa la mitad superior del canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height/2);
}

// ==========================================
// FUNCIÓN: Dibujar rectángulo inferior
// ==========================================
// Esta función dibuja un rectángulo de color verde en la mitad inferior del canvas
// No recibe parámetros: siempre dibuja en el mismo lugar
function dibujarRectangulo2(){
    // Definimos el color de relleno: '#a2f2ca' es un color verde suave
    // #a2f2ca = Verde (a2=rojo, f2=verde, ca=azul)
    ctx.fillStyle = '#a2f2ca';

    // Dibujamos un rectángulo relleno en la mitad inferior
    // ctx.fillRect(x, y, ancho, alto) dibuja un rectángulo:
    //   - x: 0 (desde la izquierda)
    //   - y: 200 (posición vertical: empieza en el píxel 200 de arriba)
    //   - ancho: canvas.width (usa todo el ancho del canvas)
    //   - alto: canvas.height/2 (la mitad de la altura)
    // Resultado: rectángulo verde que ocupa la mitad inferior del canvas
    ctx.fillRect(0, 200, canvas.width, canvas.height/2);
}

// ==========================================
// NOTAS SOBRE CANVAS
// ==========================================
// canvas.width = obtiene el ancho total del canvas en píxeles
// canvas.height = obtiene la alto total del canvas en píxeles
// Ejemplo: Si canvas.width = 600 y canvas.height = 400:
//   - canvas.width/2 = 300 (la mitad del ancho)
//   - canvas.height/2 = 200 (la mitad de la altura)

// Sistema de coordenadas del canvas:
//   - (0, 0) es la esquina superior izquierda
//   - X aumenta hacia la derecha
//   - Y aumenta hacia abajo
// Así:
//        (0,0) -------- (600,0)
//          |              |
//        (0,400) ------- (600,400)
