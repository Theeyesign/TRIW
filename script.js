// Al cargar la página, oculta las secciones de historia y la carta
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("storySections").classList.add("hidden");
    document.getElementById("card").classList.add("hidden");
    document.getElementById("hiddenContent").classList.add("hidden"); // Ocultar contenido adicional
});

// Funcionalidad para abrir la carta
document.getElementById("openCardButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value;
    const card = document.getElementById("card");
    const cardContent = document.getElementById("cardContent");

    if (codeInput === "Theringiswatching") {
        // Oculta el contenido de entrada y muestra el contenido adicional
        document.getElementById("center-box").classList.add("hidden");
        document.getElementById("hiddenContent").classList.remove("hidden");

        // Mostrar la carta
        cardContent.textContent = "¡Has abierto la carta!";
        card.classList.remove("hidden");
    } else {
        alert("Código incorrecto. Intenta de nuevo.");
    }
});

// Funcionalidad para cerrar la carta
document.getElementById("closeCardButton").addEventListener("click", function() {
    const card = document.getElementById("card");
    card.classList.add("hidden");
});

// Funcionalidad para enviar un código adicional
document.getElementById("submitCode").addEventListener("click", function() {
    const additionalCodeInput = document.getElementById("additionalCodeInput").value;

    // Aquí puedes agregar la lógica que necesites para manejar el código adicional
    alert("Código adicional recibido: " + additionalCodeInput);
});

