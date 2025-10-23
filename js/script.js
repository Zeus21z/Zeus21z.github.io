// Inicializar animaciones AOS
AOS.init({
    duration: 1000,
    once: true
});

// Efecto suave al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease-in";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
