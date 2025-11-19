
document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.querySelector('.more-button');
    const fullText = document.querySelector('.full-text');
    const shortText = document.querySelector('.short-text');

    moreButton.addEventListener('click', function() {
        if (fullText.style.display === 'none' || fullText.style.display === '') {
            fullText.style.display = 'block'; // Muestra el texto completo
            shortText.style.display = 'none'; // Oculta el texto corto
            moreButton.textContent = 'Ver menos'; // Cambia el texto del botón
        } else {
            fullText.style.display = 'none'; // Oculta el texto completo
            shortText.style.display = 'block'; // Muestra el texto corto
            moreButton.textContent = 'Ver más'; // Cambia el texto del botón
        }
    });
});