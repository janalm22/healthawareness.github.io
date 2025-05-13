// Meditation exercise with background music or animated effect
function startMeditation() {
  const videoElement = document.querySelector('.meditation-video video');
  videoElement.play();
  alert("Relax, take a deep breath, and enjoy your meditation session. 🌿");

  // Optionally, add a relaxing background music or sound effect after the alert
  const audio = new Audio('meditation-music.mp3');
  audio.play();
}
