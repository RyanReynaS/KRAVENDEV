/**
 * ====================================
 * ARCHIVO: likes.js
 * PROPÓSITO: Sistema de votación para comparar Minecraft y Roblox
 * Gestiona contadores de votos y actualiza la pantalla
 * ====================================
 */

// Variables globales para guardar los votos de cada juego
let votosMinecraft = 0;  // Contador de votos para Minecraft
let votosRoblox = 0;     // Contador de votos para Roblox

// ===== FUNCIONES PARA MINECRAFT =====

/**
 * FUNCIÓN: sumarLikeMinecraft
 * Suma +1 voto a Minecraft cuando se hace clic en el like
 */
sumarLikeMinecraft = function() {
    votosMinecraft++;              // Incrementa contador (+=1 es lo mismo que ++)
    actualizarPantallaMinecraft(); // Actualiza la pantalla
}

/**
 * FUNCIÓN: sumarCorazonMinecraft
 * Suma +5 votos a Minecraft cuando se hace clic en el corazón (más importante)
 */
sumarCorazonMinecraft = function() {
    votosMinecraft += 5;           // Incrementa 5 votos de una vez
    actualizarPantallaMinecraft(); // Actualiza la pantalla
}

/**
 * FUNCIÓN: restarLikeMinecraft
 * Resta -1 voto a Minecraft cuando se hace clic en dislike
 * No permite que baje de 0 (no hay votos negativos)
 */
restarLikeMinecraft = function() {
    votosMinecraft--;              // Decrementa contador
    // Valida que no sea negativo
    if (votosMinecraft < 0) votosMinecraft = 0;
    actualizarPantallaMinecraft(); // Actualiza la pantalla
}

/**
 * FUNCIÓN: actualizarPantallaMinecraft
 * Actualiza el número mostrado en la pantalla para Minecraft
 */
function actualizarPantallaMinecraft() {
    // Obtén el elemento lblMinecraft y cambia su texto al valor actual de votosMinecraft
    document.getElementById("lblMinecraft").innerText = votosMinecraft;
}


// ===== FUNCIONES PARA ROBLOX =====

/**
 * FUNCIÓN: sumarLikeRoblox
 * Suma +1 voto a Roblox cuando se hace clic en el like
 */
sumarLikeRoblox = function() {
    votosRoblox++;                 // Incrementa contador
    actualizarPantallaRoblox();    // Actualiza la pantalla
}

/**
 * FUNCIÓN: sumarCorazonRoblox
 * Suma +5 votos a Roblox cuando se hace clic en el corazón
 */
sumarCorazonRoblox = function() {
    votosRoblox += 5;              // Incrementa 5 votos
    actualizarPantallaRoblox();    // Actualiza la pantalla
}

/**
 * FUNCIÓN: restarLikeRoblox
 * Resta -1 voto a Roblox cuando se hace clic en dislike
 * No permite que baje de 0
 */
restarLikeRoblox = function() {
    votosRoblox--;                 // Decrementa contador
    // Valida que no sea negativo
    if (votosRoblox < 0) votosRoblox = 0;
    actualizarPantallaRoblox();    // Actualiza la pantalla
}

/**
 * FUNCIÓN: actualizarPantallaRoblox
 * Actualiza el número mostrado en la pantalla para Roblox
 */
function actualizarPantallaRoblox() {
    // Obtén el elemento lblRoblox y cambia su texto al valor actual de votosRoblox
    document.getElementById("lblRoblox").innerText = votosRoblox;
}