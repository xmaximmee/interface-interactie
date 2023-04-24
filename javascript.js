// bowser geluid toevoegen
var audio = new Audio('geluid.mp3');

// Selecteer de button
var button = document.getElementById('bowser');

// Voeg een event listener toe aan de button om het geluid af te spelen wanneer erop wordt geklikt
button.addEventListener('click', function() {
  audio.play();
});


const openPopup = () => {
    document.getElementById('popup').style.display = 'block';
  }
  document.getElementById('open-popup').addEventListener('click', openPopup);


const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
  }
  document.getElementById('close-popup').addEventListener('click', closePopup);

  