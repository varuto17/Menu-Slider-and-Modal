const toggle = document.getElementById("toggle");
const open1 = document.getElementById("open");
const close1 = document.getElementById("close");
const modal = document.getElementById("modal");

//Toggle nav

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

//Show modal
open1.addEventListener("click", () => modal.classList.add("show-modal"));

//Hide modal
close1.addEventListener("click", () => modal.classList.remove("show-modal"));

//Hide modal on outsided click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
