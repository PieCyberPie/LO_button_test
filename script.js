const body = document.querySelector("body");

const cells = body.querySelectorAll(".cell");

for (const cell of cells) {
  cell.addEventListener("click", () => {
    cell.classList.toggle("cell--light");
    cell.classList.toggle("cell--dark");
  });
}
