// thedogapi
const randomDog =
  "https://api.thedogapi.com/v1/images/search?&has_breeds=1&api_key=live_pEJDc0X4G0cNagxphXMDxLop5qX3rSzyRWZdGb4BGyMHmo7xnFf5Uy4ZISTW2ipO";

// funktion för att hämta en hund med bild och info från api
async function getDog(url) {
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    const dog = json;

    const dogCard = document.getElementById("dog-container");

    // hämta bilden och lägga den i containern
    const dogImg = document.createElement("img");
    dogImg.src = dog[0].url;
    dogCard.appendChild(dogImg);
    dogImg.classList.add("dogImg");

    // hämta rasen och lägga den i containern
    const breed = document.createElement("p");
    breed.innerHTML = `<b>Breed:</b> ${dog[0].breeds[0].name}`;
    dogCard.appendChild(breed);

    // hämta info och lägga det i containern
    const breedInfo = document.createElement("p");
    breedInfo.innerHTML = `<b>Bred for:</b> ${dog[0].breeds[0].bred_for}`;
    dogCard.appendChild(breedInfo);

    // hämta temperament och lägga det i containern
    const temperament = document.createElement("p");
    temperament.innerHTML = `<b>Temperament:</b> ${dog[0].breeds[0].temperament}`;
    dogCard.appendChild(temperament);
  } else {
    console.log("vi har ett problem");
  }
}

// kör direkt när sidan laddas
getDog(randomDog);
