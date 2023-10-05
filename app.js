const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clearBtn");
const randomColorBtn = document.querySelector(".randomColorBtn");
const blackColorBtn = document.querySelector(".blackColorBtn");
let randomColor;
let isRandomColor = false;

// Function for randomizing color

function randomizeColor() {
  // color: rgb(red, blue, black)
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

//Helper random number function
function randomNumber() {
  return Math.floor(Math.random() * 255);
}

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

// Painting grid

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((gridItem) => {
  gridItem.addEventListener("mouseleave", (e) => {
    if (isRandomColor) {
      gridItem.style.backgroundColor = `${randomizeColor()}`;
    } else {
      gridItem.style.backgroundColor = "black";
    }
  });
});

// Clearing grid

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
