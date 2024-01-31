// Membuat variabel dengan DOM
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Membuat Function untuk bagian input apabila tidak diisi akan memunculkan alert
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.Box.value = "";
  saveData();
}

// Apabila di klik li, maka memunculkan tanda check. Jika di klik spannya, maka li tersebut akan di hapus (remove)
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Function agar data tetap tersave perubahannya sekalipun di lakukan refresh pada browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// FUngsi memunculkan list
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
