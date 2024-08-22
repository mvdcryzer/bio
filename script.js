// Эффект мерцания текста
const glitchText = document.querySelector('.glitch');

setInterval(() => {
    glitchText.style.visibility = glitchText.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, Math.random() * 500 + 500); // Мерцание в случайном интервале от 500 до 1000 мс


buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        audio.currentTime = 0;
        audio.play();
    });
});
