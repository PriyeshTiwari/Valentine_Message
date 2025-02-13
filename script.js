const envelope = document.querySelector(".envelope-wrapper");
const heart = document.querySelector(".heart");
const audio = document.getElementById("valentineAudio");

heart.addEventListener("click", () => {
  envelope.classList.toggle("flap");
  
  // Play or pause the audio
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset audio to beginning
  }
});

