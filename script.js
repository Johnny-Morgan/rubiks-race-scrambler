const grid3X3Size = 9;
const grid4X4Size = 16;
const grid5X5Size = 25;

const grid3X3Length = 3;
const grid4X4Length = 4;
const grid5X5Length = 5;

const grid3X3Width = 3;
const grid4X4Width = 4;
const grid5X5Width = 5;

let grid3X3Game;
let grid4X4Game;
let grid5X5Game;

function generateColors(gridSize) {
  let tag;
  let colours = [];

  for (let i = 0; i < gridSize; i++) {
    tag = Math.trunc(Math.random() * 6) + 1;

    if (tag === 1) {
      colours.push("red");
    } else if (tag === 2) {
      colours.push("orange");
    } else if (tag === 3) {
      colours.push("yellow");
    } else if (tag === 4) {
      colours.push("green");
    } else if (tag === 5) {
      colours.push("blue");
    } else if (tag === 6) {
      colours.push("white");
    }
  }
  return colours;
}

// Function to check if there are more than 4 of any colour for the 3X3 grid
// If there are more than 4 of any colour in the colours array return false
function checkIfValidColours(colours) {
  let redCount = 0;
  let orangeCount = 0;
  let yellowCount = 0;
  let greenCount = 0;
  let blueCount = 0;
  let whiteCount = 0;

  for (const colour of colours) {
    if (colour === "red") redCount++;
    else if (colour === "orange") orangeCount++;
    else if (colour === "yellow") yellowCount++;
    else if (colour === "green") greenCount++;
    else if (colour === "blue") blueCount++;
    else if (colour === "white") whiteCount++;
  }

  if (grid3X3Game) {
    if (
      redCount > 4 ||
      orangeCount > 4 ||
      yellowCount > 4 ||
      greenCount > 4 ||
      blueCount > 4 ||
      whiteCount > 4
    ) {
      return false;
    } else {
      return true;
    }
  }

  if (grid4X4Game) {
    if (
      redCount > 5 ||
      orangeCount > 5 ||
      yellowCount > 5 ||
      greenCount > 5 ||
      blueCount > 5 ||
      whiteCount > 5
    ) {
      return false;
    } else {
      return true;
    }
  }

  if (grid5X5Game) {
    if (
      redCount > 6 ||
      orangeCount > 6 ||
      yellowCount > 6 ||
      greenCount > 6 ||
      blueCount > 6 ||
      whiteCount > 6
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function fillGrid(colours, gridWidth, gridLength) {
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridLength; j++) {
      document.getElementById(
        `square-${i}-${j}`
      ).style.backgroundColor = colours.shift();
    }
  }
}

document.getElementById("shuffle").addEventListener("click", function () {
  let gridColours;
  let validGrid = false;
  if (grid3X3Game) {
    gridColours = generateColors(grid3X3Size);
    while (!validGrid) {
      if (checkIfValidColours(gridColours)) {
        fillGrid(gridColours, grid3X3Width, grid3X3Length);
        validGrid = true;
      } else {
        gridColours = generateColors(grid3X3Size);
      }
    }
  } else if (grid4X4Game) {
    gridColours = generateColors(grid4X4Size);
    while (!validGrid) {
      if (checkIfValidColours(gridColours)) {
        fillGrid(gridColours, grid4X4Width, grid4X4Length);
        validGrid = true;
      } else {
        gridColours = generateColors(grid4X4Size);
      }
    }
  } else if (grid5X5Game) {
    gridColours = generateColors(grid5X5Size);
    while (!validGrid) {
      if (checkIfValidColours(gridColours)) {
        fillGrid(gridColours, grid5X5Width, grid5X5Length);
        validGrid = true;
      } else {
        gridColours = generateColors(grid5X5Size);
      }
    }
  }
});

document
  .getElementById("three-by-three")
  .addEventListener("click", function () {
    grid3X3Game = true;
    grid4X4Game = false;
    grid5X5Game = false;

    document.querySelector(".row3").classList.add("hidden");
    document.querySelector(".row4").classList.add("hidden");
    for (let i = 0; i <= 2; i++) {
      document.getElementById(`square-${i}-3`).classList.add("hidden");
      document.getElementById(`square-${i}-4`).classList.add("hidden");
    }
    // Add right and bottom borders
    for (let i = 0; i <= 2; i++) {
      document.getElementById(`square-${i}-2`).classList.add("border-right");
      document.getElementById(`square-2-${i}`).classList.add("border-btm");
    }
  });

document.getElementById("four-by-four").addEventListener("click", function () {
  grid3X3Game = false;
  grid4X4Game = true;
  grid5X5Game = false;

  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.add("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.add("hidden");
  }

  for (let i = 0; i <= 2; i++) {
    // Remove right border when clicking to 4 X 4 from 3 X 3
    document.getElementById(`square-${i}-2`).classList.remove("border-right");
    // Remove bottom border when clicking to 4 X 4 from 3 X 3
    document.getElementById(`square-2-${i}`).classList.remove("border-btm");
  }
  // Add right and bottom borders
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.add("border-right");
    document.getElementById(`square-3-${i}`).classList.add("border-btm");
  }
});

document.getElementById("five-by-five").addEventListener("click", function () {
  grid3X3Game = false;
  grid4X4Game = false;
  grid5X5Game = true;

  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.remove("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.remove("hidden");
  }

  for (let i = 0; i <= 2; i++) {
    // Remove right border when clicking to 5 X 5 from 3 X 3
    document.getElementById(`square-${i}-2`).classList.remove("border-right");
    // Remove bottom border when clicking to 5 X 5 from 3 X 3
    document.getElementById(`square-2-${i}`).classList.remove("border-btm");
  }

  // Remove right and bottom borders when clickong from 4 X 4 to 5 X 5
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("border-right");
    document.getElementById(`square-3-${i}`).classList.remove("border-btm");
  }
});
