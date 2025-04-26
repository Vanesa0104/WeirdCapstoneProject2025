window.addEventListener("load", () => {
    // once the page is loaded, what will happen?
    const content = document.getElementById("content"); 
    const unmuteButton = document.getElementById("unmuteButton");
    const bgMusic = document.getElementById("bg-music");   
    content.style.display = "none";
    
    // Must click unmute to proceed
    unmuteButton.addEventListener("click", () => {
      content.style.display = "block";
      unmuteButton.style.display = "none";
      setTimeout(() => {
        content.classList.add("visible");
      }, 50);
    }, { once: true });

      revealTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        hiddenMessage.classList.add("revealed");

        hiddenMessage1.classList.add("revealed");

        hiddenMessage2.classList.add("revealed");

        hiddenImage.style.display = "block";

        revealTrigger.classList.remove("clickable");
    }); 

    
    document.getElementById("revealButton").addEventListener("click", () => {
        const image = document.getElementById("hiddenImage");
        image.style.display = "block";
    });
      

});


document.addEventListener("DOMContentLoaded", () => {
    const revealTrigger = document.getElementById("revealTrigger");
    const hiddenImage = document.getElementById("hiddenImage");

    if (revealTrigger && hiddenImage) {
            revealTrigger.addEventListener("click", () => {
            hiddenImage.style.display = "block";
            revealTrigger.classList.remove("clickable");
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const hoverTriggers = document.querySelectorAll(".hover-trigger");
  const hiddenMessages = document.querySelectorAll(".hidden-paragraph");
  const revealButtonContainer = document.getElementById("revealButtonContainer");
  const nextButton = document.getElementById("nextButton");

  let currentTriggerIndex = 0;

  hoverTriggers.forEach((trigger, index) => {
    trigger.addEventListener("mouseenter", () => {
      if (index === currentTriggerIndex) {
        if (hiddenMessages[index]) {
          hiddenMessages[index].classList.add("revealed");
        }

        trigger.classList.add("revealed");
        currentTriggerIndex++;

        if (currentTriggerIndex === hoverTriggers.length) {
          revealButtonContainer.style.display = "block";
          nextButton.disabled = false;
        }
      }
    });
  });
});
  
document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("revealButton");
    const hiddenImage = document.getElementById("hiddenImage");
    const postRevealContent = document.getElementById("postRevealContent");
  
    revealButton.addEventListener("click", () => {
        hiddenImage.style.display = "block";
        postRevealContent.style.display = "block";
        revealButton.style.display = "none";
    });
});  
  
document.addEventListener("DOMContentLoaded", () => {
    const puzzleButton = document.getElementById("puzzleButton");
    const hiddenImage = document.getElementById("hiddenImage");
    const postRevealContent = document.getElementById("postRevealContent");
    const nextButton = document.getElementById("nextButton");

    puzzleButton.addEventListener("click", () => {
        hiddenImage.style.display = "block";
        postRevealContent.style.display = "block"; 
        nextButton.disabled = false;
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hoverTriggers = document.querySelectorAll(".hover-trigger");
    const hiddenMessages = document.querySelectorAll(".hidden-paragraph");
    const revealButtonContainer = document.getElementById("revealButtonContainer");
    const nextButton = document.getElementById("nextButton");

    let revealedCount = 0;

    hoverTriggers.forEach((trigger, index) => {
        trigger.addEventListener("mouseenter", () => {
            const message = hiddenMessages[index];
            
            if (message && !message.classList.contains("revealed")) {
                message.classList.add("revealed");
                revealedCount++;

                if (revealedCount === hiddenMessages.length) {
                    revealButtonContainer.style.display = "block";
                    nextButton.disabled = false;
                }
            }
        });
    });

    const puzzleButton = document.getElementById("puzzleButton");
    const postRevealContent = document.getElementById("postRevealContent");

    puzzleButton.addEventListener("click", () => {
        postRevealContent.style.display = "block";
        nextButton.disabled = false;
    });
});
  

// Again once loaded
window.addEventListener("load", () => {
    // Map the sounds for each button
    const soundMap = {
      detective: document.getElementById("sound-detective"),
      entity: document.getElementById("sound-entity"),
      next: document.getElementById("sound-next")
    };
    
    // Buttons
    document.querySelectorAll("button").forEach(button => {
        // Hover over button
        button.addEventListener("mouseenter", () => {
            const key = button.dataset.sound;
            const sound = soundMap[key];
            if (sound) {
                // Loop over while hovering and start at 0 secs
                sound.currentTime = 0;
                sound.loop = true;
                sound.volume = 0.2;
                sound.play().catch(err => {
                    console.warn(`Couldn't play sound for ${key}:`, err);
                });
            }
        });
        
        // Once no longer hovering
        button.addEventListener("mouseleave", () => {
            const key = button.dataset.sound;
            const sound = soundMap[key];
            if (sound) {
                sound.pause();
                // Reset for the next hover
                sound.currentTime = 0;
            }
        });
    });
});

// Flicker effect on random intervals
function triggerFlicker() {
    const headings = document.querySelectorAll("h1, h2");
    
    headings.forEach((el) => {
        el.classList.add("glitch-flicker");

        // Remove class after animation ends
        setTimeout(() => {
        el.classList.remove("glitch-flicker");
        }, 100);
    });
}

// Glitch randomly
function startGlitchLoop() {
    setInterval(() => {
        // 45% chance every interval
        if (Math.random() <= 0.45) { 
            triggerFlicker();
        }
    }, 100); 
}

// To commence the glitching
window.addEventListener("load", startGlitchLoop);

document.addEventListener("DOMContentLoaded", () => {
    const detectiveBtn = document.querySelector("button[data-sound='detective']");
    const entityBtn = document.querySelector("button[data-sound='entity']");

    const selectedArchetype = localStorage.getItem("selectedArchetype");

    if (selectedArchetype) {
        const selectedButton = document.querySelector(`button[data-sound="${selectedArchetype}"]`);
        const unselectedButton = selectedArchetype === "detective" ? entityBtn : detectiveBtn;

        // Disable only the unselected one
        if (unselectedButton) {
            unselectedButton.disabled = true;
            unselectedButton.classList.add("disabled");
        }

        // Mark selected and re-enable navigation
        if (selectedButton) {
            selectedButton.disabled = false;
            selectedButton.classList.add("chosen");
            if (!selectedButton.textContent.includes("✔")) {
                selectedButton.textContent += " ✔";
            }

            // Allow navigation again
            selectedButton.addEventListener("click", () => {
                window.location.href = `archetypes/${selectedArchetype}.html`;
            });
        }
    }

    detectiveBtn.addEventListener("click", () => handleArchetypeSelection("detective"));
    entityBtn.addEventListener("click", () => handleArchetypeSelection("entity"));
});


function handleArchetypeSelection(archetype) {
    // Store the selected archetype in both localStorage and sessionStorage
    localStorage.setItem("selectedArchetype", archetype);
    sessionStorage.setItem("chosenArchetype", archetype);

    // Disable the other button (based on selection) and mark the chosen one
    const selectedButton = document.querySelector(`button[data-sound="${archetype}"]`);
    const otherType = archetype === "detective" ? "entity" : "detective";
    const unselectedButton = document.querySelector(`button[data-sound="${otherType}"]`);

    // Disable the unselected archetype button
    if (unselectedButton) {
        unselectedButton.disabled = true;
        unselectedButton.classList.add("disabled");
    }

    // Mark the selected button as chosen
    if (selectedButton) {
        selectedButton.disabled = false;
        selectedButton.classList.add("chosen");
        if (!selectedButton.textContent.includes("✔")) {
            selectedButton.textContent += " ✔";
        }
    }

    // Navigate to the corresponding page for the selected archetype
    window.location.href = `archetypes/${archetype}.html`;
}

// Used to determine what page to go to next
function nextStep(choice) {
    const archetype = sessionStorage.getItem("chosenArchetype") || localStorage.getItem("selectedArchetype");
    if (!archetype) {
        alert("No archetype selected.");
        return;
    }
    window.location.href = `${archetype}_${choice}.html`;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("floating-words-container");

    // Retrieve the chosen archetype from storage
    const archetype = sessionStorage.getItem("chosenArchetype") || localStorage.getItem("selectedArchetype");

    // Define word detective set
    const detectiveWords = [
        "I'm sorry", 
        "Leave", 
        "Turn back", 
        "They're watching", 
        "Don't trust them", 
        "Run"
    ];

    // Define word entity set
    const entityWordsItchy = [
        "Oh my god", 
        "I'm so sorry",
        "Please stop this",
        "I don't want this",
        "Let me go!", 
        "I can't control it", 
        "Somebody help me!", 
        "Please!", 
        "Stop!",
        "NO!",
        "You did this",
        "How could you?",
        "Ha ha ha ha!",
        "HA HA HA!",
        "Run",
        "What do you want from me?",
        "Don't come any closer!",
        "Leave me alone!",
        "Who is in control?"
    ];

    // Define word entity set
    const entityWordsPrayer = [
        "O blessed Archangel Gabriel", 
        "You were chosen", 
        "Intercession", 
        "Cure of all the evils", 
        "Afflict our bodies and souls", 
        "Bring healing to all our infirmities",
        "Physical",
        "Mental",
        "Spiritual",
        "Only with your help",
        "God's grace",
        "Can we overcome our difficulties?"
    ];

    let words = [];

    // Decide word set based on archetype and current page
    if (archetype?.toLowerCase() === "detective") {
        words = detectiveWords;
    } else if (archetype?.toLowerCase() === "entity") {
        const path = window.location.pathname.toLowerCase();
        const pageName = path.substring(path.lastIndexOf('/') + 1);

        if (pageName.includes("itchy")) {
            words = entityWordsItchy;
        } else if (pageName.includes("hidden")) {
            words = entityWordsPrayer;
        }
    }

    // Create a floating word with animation
    function createFloatingWord() {
        const word = document.createElement("span");
        word.classList.add("floating-word");
        word.textContent = words[Math.floor(Math.random() * words.length)];
        word.style.left = Math.random() * 100 + "vw";
        const direction = Math.random() > 0.5 ? "float-down" : "float-up";
        word.style.animationName = direction;
        word.style.animationDuration = (6 + Math.random() * 4) + "s";
        container.appendChild(word);

        setTimeout(() => word.remove(), 10000);
    }

    if (container) {
        setInterval(createFloatingWord, 1200);
    }
});
