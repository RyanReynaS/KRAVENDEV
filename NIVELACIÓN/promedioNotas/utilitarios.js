function recuperarFloat(idComponente) {
    let valor = document.getElementById(idComponente).value;
    return parseFloat(valor);
}

function mostrarTexto(idComponente, mensaje) {
    document.getElementById(idComponente).innerText = mensaje;
}

function mostrarImagen(idComponente, rutaImagen) {
    document.getElementById(idComponente).src = rutaImagen;
}