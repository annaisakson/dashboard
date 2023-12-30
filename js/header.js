document.addEventListener("DOMContentLoaded", function () {
  // Kolla om det reedan finns en sparad titel i local storage
  const storedTitle = localStorage.getItem("header");

  // uppdatera titel
  const header = document.getElementById("header");
  header.textContent = storedTitle || "Klicka för att ändra";

  // input event
  header.addEventListener("input", function () {
    const newHeader = header.textContent;

    // uppdatera om det skrivits en ny titel
    if (newHeader !== null) {
      header.textContent = newHeader;

      // spara i local storage
      localStorage.setItem("header", newHeader);
    }

    header.addEventListener("keydown", function (event) {
      // kolla om Enter tryckts
      if (event.key === "Enter") {
        // spara ändringar
        const newHeader = header.textContent;
        localStorage.setItem("header", newHeader);

        // avsluta redigering
        header.blur();
      }
    });
  });
});
