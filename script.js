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
  for (let i = 1; i <= 9; i++) {
    generateColor(`square${i}`);
  }
});
