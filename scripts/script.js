// BROUWSER SONG
var audioFiles = ["../audio/AudioBowser.mp3", "./audio/AudioBowserk1.mp3", "./audio/AudioBowserk2.mp3"];

function playSound() {
    var randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
    console.log("hoi");
    audio.src = randomFile;
    audio.play();
  }

  setInterval(playSound, 10000);
// dit is een JavaScript-functie die een bepaalde functie herhaaldelijk uitvoert op een bepaald tijdsinterval

  let intervalId = setInterval(playSound, 10000);
  clearInterval(intervalId);

//  let is een sleutelwoord dat wordt gebruikt om een variabele te declareren.
//   clearInterval wordt gebruikt om de interval te beëindigen en de functie playSound() te stoppen.














// declareert een constante variabele genaamd openPopup en wijst deze 
// toe aan een arrow functie die bepaalde acties uitvoert wanneer deze wordt opgeroepen.

// 1e peach
const popup1Button = document.querySelector("ol li:nth-of-type(1) > button");
const popup1Close = document.getElementById('close-popup1'); 
const popup1 = document.getElementById('popup1');

popup1Button.addEventListener('click', popup1Openen);
popup1Close.addEventListener('click', popup1Sluiten);

function popup1Openen() {
    popup1.classList.add("show");
}

function popup1Sluiten() {
    const popup1 = document.getElementById('popup1');
    popup1.classList.remove("show");
}






// 2e peach
const popup2Button = document.querySelector("ol li:nth-of-type(2) > button");
const popup2Close = document.getElementById("close-popup2");
const popup2 = document.getElementById("popup2");

const blok2 = document.querySelector("ol li:nth-of-type(2) > .blok");
const muntje2 = document.querySelector("ol li:nth-of-type(2) .blok img:nth-of-type(2)");
const audio2 = document.querySelector("ol li:nth-of-type(2) audio");

popup2Button.addEventListener('click', popup2Openen);
popup2Close.addEventListener('click', popup2Sluiten);

function popup2Openen() {
    // voor de animatie van peach, het blokje en het muntje
    popup2Button.classList.add("spring");
    blok2.classList.add("spring");
    // als het muntje klaar is met de animatie
    muntje2.addEventListener("animationend", () => {
        popup2Button.classList.remove("spring");
        blok2.classList.remove("spring");

        // voor het tonen van de popup
    });

    popup2.classList.add("show");
    // deze zet je niet tussen de { } omdat dit direct moet worden uitgevoerd en niet na de animatie. 
    // tussen de { } worden alleen animatiegerelateerde klassen toegevoegd en verwijderd, 

    // speel een geluid, setTimeout zorgt er voor dat het een vertraging krijgt van 400ms.
    // dit doe ik zodat het geluid precies op het goeie moment komt.
    setTimeout(() => {
        audio2.play();
      }, 400);
 
}

function popup2Sluiten() {
    const popup2 = document.getElementById('popup2');

    popup2.classList.remove("show");
}







// 3e peach
const popup3Button = document.querySelector("ol li:nth-of-type(3) > button");
const popup3Close = document.getElementById('close-popup3'); 
const popup3 = document.getElementById('popup3');


popup3Button.addEventListener('click', popup3Openen);
popup3Close.addEventListener('click', popup3Sluiten);

function popup3Openen() {
    popup3.classList.add("show");
}

function popup3Sluiten() {
    popup3.classList.remove("show");
}





// 4e peach
const popup4Button = document.querySelector("ol li:nth-of-type(4) > button");
const popup4Close = document.getElementById('close-popup4'); 
const popup4 = document.getElementById('popup4');

popup4Button.addEventListener('click', popup4Openen);
popup4Close.addEventListener('click', popup4Sluiten);

function popup4Openen() {
    popup4.classList.add("show");
}

function popup4Sluiten() {
    popup4.classList.remove("show");
}





// 5e peach
const popup5Button = document.querySelector("ol li:nth-of-type(5) > button");
const popup5Close = document.getElementById('close-popup5'); 
const popup5 = document.getElementById('popup5');


popup5Button.addEventListener('click', popup5Openen);
popup5Close.addEventListener('click', popup5Sluiten);

function popup5Openen() {
    popup5.classList.add("show");
}

function popup5Sluiten() {
    popup5.classList.remove("show");
}

// TOAD SCHREEUW
const toadbutton = document.querySelector(".toad");
const audio3 = new Audio('../../../../../audio/toad.mp3');

toadbutton.addEventListener('click', speeltoad);


function speeltoad() {
    audio3.play();
  }




