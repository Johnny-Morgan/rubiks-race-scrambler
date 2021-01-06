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
  });

document.getElementById("four-by-four").addEventListener("click", function () {
  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.add("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.add("hidden");
  }
});

document.getElementById("five-by-five").addEventListener("click", function () {
  document.querySelector(".row3").classList.remove("hidden");
  document.querySelector(".row4").classList.remove("hidden");
  for (let i = 0; i <= 3; i++) {
    document.getElementById(`square-${i}-3`).classList.remove("hidden");
    document.getElementById(`square-${i}-4`).classList.remove("hidden");
  }
});
