const grid = document.querySelector(".grid");

let gridItems = document.querySelectorAll(".grid-item");
const gridHeading = document.querySelector(".grid-heading");
const gridSize = document.querySelector(".gridSize");

const clearBtn = document.querySelector(".clearBtn");
const randomColorBtn = document.querySelector(".randomColorBtn");
const blackColorBtn = document.querySelector(".blackColorBtn");

let randomColor;
let isRandomColor = false;

function randomizeColor() {
  // color: rgb(red, blue, black)
  return `rgb(${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()})`;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 255);
}

// Function that creates grid
function makeRows(rows, cols) {
  grid.innerHTML = "";
  gridHeading.innerText = `Grid Size: ${rows} x ${cols}`;

  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  }
  gridItems = document.querySelectorAll(".grid-item");
}

makeRows(16, 16);
paintGrid();

function paintGrid() {
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseenter", (e) => {
      if (isRandomColor) {
        gridItem.style.backgroundColor = `${randomizeColor()}`;
      } else {
        gridItem.style.backgroundColor = "black";
      }
    });
  });
}

clearBtn.addEventListener("click", (e) => {
  gridItems.forEach((gridItem) => {
    gridItem.style.backgroundColor = "white";
  });
});

blackColorBtn.addEventListener("click", () => {
  isRandomColor = false;
});

randomColorBtn.addEventListener("click", () => {
  isRandomColor = true;
});

gridSize.addEventListener("change", (e) => {
  makeRows(e.target.value, e.target.value);
  paintGrid();
});
