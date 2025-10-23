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

// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Mensaje de ${name} desde tu página web`;
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;

    const mailtoLink = `mailto:villarroelgarciazeus@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});