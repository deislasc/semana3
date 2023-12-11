// script.js
window.onload = function() {
    alert("Bienvenido al apartado Arquitectura de Servicios!");
};

document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.querySelector('h1');
    
    titulo.addEventListener('mouseover', function() {
        this.style.color = 'green'; // Cambia a verde cuando el cursor está encima
    });

    titulo.addEventListener('mouseout', function() {
        this.style.color = ''; // Vuelve al color original cuando el cursor sale
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var imagen = document.getElementById('imagenCentrada');
    imagen.style.display = 'block';
    imagen.style.marginLeft = 'auto';
    imagen.style.marginRight = 'auto';
});

