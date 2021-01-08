function generateColor(id) {
  let tag = Math.trunc(Math.random() * 6) + 1;

  if (tag === 1) {
    document.getElementById(id).style.backgroundColor = "red";
  } else if (tag === 2) {
    document.getElementById(id).style.backgroundColor = "orange";
  } else if (tag === 3) {
    document.getElementById(id).style.backgroundColor = "yellow";
  } else if (tag === 4) {
    document.getElementById(id).style.backgroundColor = "green";
  } else if (tag === 5) {
    document.getElementById(id).style.backgroundColor = "blue";
  } else if (tag === 6) {
    document.getElementById(id).style.backgroundColor = "white";
  }
}

document.getElementById("shuffle").addEventListener("click", function () {
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
      generateColor(`square-${i}-${j}`);
    }
  }
});

document
  .getElementById("three-by-three")
  .addEventListener("click", function () {
    document.querySelector(".row3").classList.add("hidden");
    document.querySelector(".row4").classList.add("hidden");
    for (let i = 0; i <= 2; i++) {
      document.getElementById(`square-${i}-3`).classList.add("hidden");
      document.getElementById(`square-${i}-4`).classList.add("hidden");
    }
    // Add right and bottom borders
    document.getElementById(`square-0-2`).classList.add("border-right");
    document.getElementById(`square-1-2`).classList.add("border-right");
    document.getElementById(`square-2-2`).classList.add("border-right");
    document.getElementById(`square-2-0`).classList.add("border-btm");
    document.getElementById(`square-2-1`).classList.add("border-btm");
    document.getElementById(`square-2-2`).classList.add("border-btm");
  });

document.getElementById("four-by-four").addEventListener("click", function () {
  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.add("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.add("hidden");
  }
  // Remove right border when clicking to 4 X 4 from 3 X 3
  document.getElementById(`square-0-2`).classList.remove("border-right");
  document.getElementById(`square-1-2`).classList.remove("border-right");
  document.getElementById(`square-2-2`).classList.remove("border-right");
  // Remove bottom border when clicking to 4 X 4 from 3 X 3
  document.getElementById(`square-2-0`).classList.remove("border-btm");
  document.getElementById(`square-2-1`).classList.remove("border-btm");
  document.getElementById(`square-2-2`).classList.remove("border-btm");
  // Add right and bottom borders
  document.getElementById(`square-0-3`).classList.add("border-right");
  document.getElementById(`square-1-3`).classList.add("border-right");
  document.getElementById(`square-2-3`).classList.add("border-right");
  document.getElementById(`square-3-3`).classList.add("border-right");
  document.getElementById(`square-3-0`).classList.add("border-btm");
  document.getElementById(`square-3-1`).classList.add("border-btm");
  document.getElementById(`square-3-2`).classList.add("border-btm");
  document.getElementById(`square-3-3`).classList.add("border-btm");
});

document.getElementById("five-by-five").addEventListener("click", function () {
  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.remove("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.remove("hidden");
  }
  // Remove right border when clicking to 5 X 5 from 3 X 3
  document.getElementById(`square-0-2`).classList.remove("border-right");
  document.getElementById(`square-1-2`).classList.remove("border-right");
  document.getElementById(`square-2-2`).classList.remove("border-right");
  // Remove bottom border when clicking to 5 X 5 from 3 X 3
  document.getElementById(`square-2-0`).classList.remove("border-btm");
  document.getElementById(`square-2-1`).classList.remove("border-btm");
  document.getElementById(`square-2-2`).classList.remove("border-btm");
  // Remove right and bottom borders when clickong from 4 X 4 to 5 X 5
  document.getElementById(`square-0-3`).classList.remove("border-right");
  document.getElementById(`square-1-3`).classList.remove("border-right");
  document.getElementById(`square-2-3`).classList.remove("border-right");
  document.getElementById(`square-3-3`).classList.remove("border-right");
  document.getElementById(`square-3-0`).classList.remove("border-btm");
  document.getElementById(`square-3-1`).classList.remove("border-btm");
  document.getElementById(`square-3-2`).classList.remove("border-btm");
  document.getElementById(`square-3-3`).classList.remove("border-btm");
});
