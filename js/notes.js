document.addEventListener("DOMContentLoaded", function () {
  // kolla om det finns sparade anteckningar i local storage
  const storedNotes = localStorage.getItem("notes");

  // uppdatera anteckningar
  const notes = document.getElementById("notes");
  notes.textContent = storedNotes;

  // knapp för att spara
  const saveBtn = document.getElementById("save");
  // göm knappen
  saveBtn.classList.add("hide");
  // visa knappen när något skrivs
  notes.addEventListener(
    "keyup",
    function () {
      if (this.value.length) {
        saveBtn.classList.remove("hide");
      }
    },
    false
  );

  // spara i local storage med knapp
  saveBtn.addEventListener("click", function () {
    const newNotes = notes.value;

    localStorage.setItem("notes", newNotes);
    saveBtn.classList.add("hide");
  });
});
