document.addEventListener("DOMContentLoaded", function () {
    // Función para validar el formulario antes de enviarlo
    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var mensaje = document.getElementById("mensaje").value;

        if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
            return false;
        }

        // Aplicar animación de salida al formulario
        var formulario = document.getElementById("formulario");
        formulario.classList.add("salida");

        // Esperar a que finalice la animación antes de ocultar el formulario
        formulario.addEventListener("animationend", function () {
            formulario.style.display = "none";
        });

        return false;
    }

    // Agregar animación de entrada al cargar la página
    var formulario = document.getElementById("formulario");
    formulario.style.opacity = "0";
    formulario.style.transform = "translateY(20px)";

    setTimeout(function () {
        formulario.style.opacity = "1";
        formulario.style.transform = "translateY(0)";
    }, 100);

    // Agregar evento de envío del formulario
    formulario.addEventListener("submit", validarFormulario);
});
