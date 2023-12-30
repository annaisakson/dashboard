// array för att hålla länkar
let links = [];

const addUrl = document.getElementById("add-url");

// funktion för att lägga till fler länkar
addUrl.addEventListener("click", function addLink() {
  const linkInput = document.getElementById("link-input");
  const linkNameInput = document.getElementById("link-name-input");

  // göm input fält tills användaren tryckt på knappen
  linkInput.classList.toggle("hide");
  linkNameInput.classList.toggle("hide");

  const linkUrl = linkInput.value.trim();
  const linkName = linkNameInput.value.trim();

  // skapa länk-objekt
  if (linkUrl !== "" && linkName !== "") {
    const link = { name: linkName, url: linkUrl };

    // lägg till i array
    links.push(link);

    // töm input fältet
    linkInput.value = "";
    linkNameInput.value = "";

    // spara och uppdatera länkar
    saveLinks();
    displayLinks();
  }
});

// funktion för att ta bort länkar
function removeLink(index) {
  // ta bort från array
  links.splice(index, 1);
  // spara och uppdatera
  saveLinks();
  displayLinks();
}

// funktion för att spara länkar i local storage
function saveLinks() {
  localStorage.setItem("links", JSON.stringify(links));
}

// funktion hämta länkar från local storage
function loadLinks() {
  const storedLinks = localStorage.getItem("links");
  if (storedLinks) {
    links = JSON.parse(storedLinks);
    displayLinks();
  }
}

// funktion för att visa alla länkar
function displayLinks() {
  const linkContainer = document.getElementById("link-container");
  linkContainer.innerHTML = "";

  // ny div för varje länk som lagts till
  // hela diven är klickbar
  links.forEach((link, index) => {
    const linkItem = document.createElement("div");
    linkItem.classList.add("linkItem");
    linkItem.addEventListener("click", (event) => openLink(event, link.url));

    // text som visar länknamnet
    const linkText = document.createElement("p");
    linkText.classList.add("linkText");
    linkText.textContent = link.name;

    // knapp för att kunna ta bort länken
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      removeLink(index);
    });

    // hämta sidans favicon
    const favicon = document.createElement("img");
    favicon.src = `https://www.google.com/s2/favicons?domain=${link.url}`;
    favicon.alt = "Favicon";

    linkItem.appendChild(favicon);
    linkItem.appendChild(linkText);
    linkItem.appendChild(removeBtn);
    linkContainer.appendChild(linkItem);
  });
}

// funktion som öppnar länken i nytt fönster utom om man klickar på X
function openLink(event, url) {
  if (!event.target.classList.contains("removeBtn")) {
    window.open(url, "_blank");
  }
}

// ta fram de sparade länkarna när sidan laddas
loadLinks();
