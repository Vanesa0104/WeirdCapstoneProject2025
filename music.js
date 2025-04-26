window.addEventListener("load", () => {
    const music = document.getElementById("bg-music");
    const unmuteButton = document.getElementById("unmuteButton");

    // Create an AudioContext for controlling audio playback
    const context = new (window.AudioContext || window.webkitAudioContext)();

    // Try to autoplay music
    music.play().catch((err) => {
        console.warn("Autoplay blocked, waiting for user interaction...", err);

        // Show the unmute button if autoplay is blocked
        unmuteButton.style.display = "block";

        // Unmute the music and resume playback when the user clicks the button
        unmuteButton.addEventListener("click", () => {
            context.resume().then(() => {
                console.log("AudioContext resumed and playback started");

                music.muted = false;
                music.volume = 0.16;
                music.play().catch((e) => {
                    console.error("Autoplay still blocked:", e);
                });

                // Store the fact that the music is unmuted in localStorage
                localStorage.setItem("musicUnmuted", "true");
            });
        });
    });

    // Check if the user has previously unmuted the music
    const hasUnmutedBefore = localStorage.getItem("musicUnmuted") === "true";

    if (hasUnmutedBefore) {
        // If the music was previously unmuted, start playing it automatically
        music.muted = false;
        music.volume = 0.16;
        music.play().catch((err) => {
            console.warn("Autoplay blocked even though user had unmuted:", err);
        });
    }

    // Set initial volume for the music
    music.volume = 0.2;
});

window.addEventListener("load", () => {
    const bells = document.getElementById("bg-bells");
    const unmuteButton = document.getElementById("unmuteButton");
  
    unmuteButton.addEventListener("click", () => {
      bells.muted = false;
      bells.volume = 0.15;
      bells.play();
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("chamberTrigger");
    const buttonContainer = document.getElementById("chamberButtonContainer");
    const button = document.getElementById("chamberButton");
    const sound = document.getElementById("chamberSound");
  
    let triggered = false;
  
    trigger.addEventListener("mouseenter", () => {
      if (!triggered) {
        triggered = true;
        buttonContainer.style.display = "block";
      }
    });
  
    button.addEventListener("click", () => {
      sound.currentTime = 0;
      sound.volume = 0.3;
      sound.play();
    });
  });
  