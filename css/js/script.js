document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const jobList = document.querySelector('.job-list');

    // Inicialmente ocultar la lista de trabajos y mostrar solo el primero
    jobList.style.maxHeight = '300px'; // Altura suficiente para un trabajo
    toggleBtn.addEventListener('click', () => {
        if (jobList.style.maxHeight === '300px' || jobList.style.maxHeight === '') {
            jobList.style.maxHeight = jobList.scrollHeight + 'px'; // Expandir a la altura total
            toggleBtn.textContent = 'Ocultar';
        } else {
            jobList.style.maxHeight = '300px'; // Volver a altura inicial
            toggleBtn.textContent = 'Mostrar/Ocultar';
        }
    });

    // Animación al pasar el ratón sobre la foto
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseover', () => {
        profilePic.style.transform = 'scale(1.05)';
    });
    profilePic.addEventListener('mouseout', () => {
        profilePic.style.transform = 'scale(1)';
    });
});
