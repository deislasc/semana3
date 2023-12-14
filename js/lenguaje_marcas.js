document.addEventListener('DOMContentLoaded', function() {
    var imagen = document.getElementById('imagenCentrada');
    
    imagen.addEventListener('mouseover', function() {
        this.classList.add('img-expand');
    });

    imagen.addEventListener('mouseout', function() {
        this.classList.remove('img-expand');
    });
});
