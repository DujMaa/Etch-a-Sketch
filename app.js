const grid = document.querySelector(".grid");

// Function that creates our grid

function makeRows(rows, cols) {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
}
makeRows(16, 16);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseleave", (e) => {
    gridItem.style.backgroundColor = "black";
  });
});
