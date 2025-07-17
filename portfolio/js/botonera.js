document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('player');
  const images = document.querySelectorAll('.audio-img');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      const audioSrc = img.getAttribute('data-audio');

      // Si el mismo audio está sonando, pausa/reproduce
      if (player.src.endsWith(audioSrc)) {
        if (!player.paused) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        // Cambia el audio y reproduce
        player.src = audioSrc;
        player.play();
      }
    });
  });
});
