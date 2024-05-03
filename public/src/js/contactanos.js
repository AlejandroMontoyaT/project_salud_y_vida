document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const nameInput = document.getElementById("nameUser");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phoneNumber");
        const messageInput = document.getElementById("message");

        // Validar el nombre
        const nameParts = nameInput.value.trim().split(/\s+/);
        const validName = nameParts.every(part => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'-]+$/.test(part));
        if (nameParts.length < 2 || !validName) {
            alert("Por favor, ingresa un nombre válido (nombre y apellido).");
            return;
        }

        // Validar el correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validar el teléfono
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("Por favor, ingresa un número de teléfono válido (10 dígitos numéricos).");
            return;
        }

        // Enviar el formulario si pasa todas las validaciones
        alert("Se ha enviado tu mensaje.");
        form.reset(); // Limpiar el formulario después del envío
    });
});

