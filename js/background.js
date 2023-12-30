// få random bild från unsplash api
const clientID = "_in-znHlamwdZ-TPsd52KhIPooRmKIAVLFkAJhkpVuU";
const randomBg = `https://api.unsplash.com/photos/random/?client_id=${clientID}&query=nature,animals`;

// variabler
const body = document.body;
const randomBgBtn = document.getElementById("random-bg");
const savedBg = localStorage.getItem("bgImg");

// kolla om det finns en sparad bakgrund redan
if (savedBg) {
  setAndSaveBg(savedBg);
}

// funktion för att sätta den nya bakgrunden och spara i local storage
function setAndSaveBg(imageUrl) {
  body.style.backgroundImage = `url(${imageUrl})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";

  localStorage.setItem("bgImg", imageUrl);
}

// funktion för att hämta en ny bakgrund från api-et när du klickar på knappen och sen spara den
randomBgBtn.addEventListener("click", function getBg() {
  fetch(randomBg)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      const imageUrl = jsonData.urls.regular;
      setAndSaveBg(imageUrl);
    });
});
