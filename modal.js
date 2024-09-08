const openRules = document.querySelector("#open-rules");
const closeRules = document.querySelector("#close-rules");
const rulesDialog = document.querySelector("dialog");

openRules.addEventListener("click", () => {
  rulesDialog.style.display = "flex";
  setTimeout(() => {
    rulesDialog.classList.add("show");
  }, 10);
});

closeRules.addEventListener("click", () => {
  rulesDialog.classList.remove("show");
  setTimeout(() => {
    rulesDialog.style.display = "none";
  }, 500);
});