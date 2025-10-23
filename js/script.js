// Inicializar animaciones AOS
AOS.init({
    duration: 1000, // Duración de cada animación en ms
    once: true // Animar solo una vez
});

// Scroll suave en toda la página
document.documentElement.style.scrollBehavior = "smooth";

// Pequeño efecto de aparición gradual al cargar
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});
