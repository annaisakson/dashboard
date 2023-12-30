// hämta html elements
const clock = document.getElementById("clock");
const date1 = document.getElementById("date-1");

function updateTime() {
  // hämta tid och datum
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  // array med alla månader
  const monthNames = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  // hämta år, månad och dag
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];
  const day = now.getDate().toString().padStart(2, "0");

  // formatera string
  const clockStr = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const dateStr = `${day} ${month} ${year}`;

  // ändra text
  clock.innerText = clockStr;
  date1.innerText = dateStr;

  // uppdatera varje minut
  setTimeout(updateTime, 60000);
}
// kör direkt när sidan laddas
updateTime();
