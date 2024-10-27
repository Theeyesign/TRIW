// Al cargar la página, oculta las secciones de historia y la carta
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("storySections").classList.add("hidden");
    document.getElementById("card").classList.add("hidden");
});

// Funcionalidad para abrir la carta
document.getElementById("openCardButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value;
    const card = document.getElementById("card");
    const cardContent = document.getElementById("cardContent");

    if (codeInput === "Theringiswatching") {
        // Muestra las secciones de historia
        document.getElementById("storySections").classList.remove("hidden");
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
