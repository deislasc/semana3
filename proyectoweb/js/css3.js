document.addEventListener('mousemove', function(e) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    var flotante1 = document.getElementById('flotante1');
    var flotante2 = document.getElementById('flotante2');
    
    // Cambia estos valores para ajustar el movimiento
    var depth1 = 50; // Profundidad para flotante1
    var depth2 = 30; // Profundidad para flotante2

    var moveX1 = ((mouseX - width / 2) / width) * depth1;
    var moveY1 = ((mouseY - height / 2) / height) * depth1;
    var moveX2 = ((mouseX - width / 2) / width) * depth2;
    var moveY2 = ((mouseY - height / 2) / height) * depth2;

    flotante1.style.transform = 'translate(' + moveX1 + 'px, ' + moveY1 + 'px)';
    flotante2.style.transform = 'translate(' + moveX2 + 'px, ' + moveY2 + 'px)';
});
