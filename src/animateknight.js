import { moveSound, flagSound } from "./sounds";
import { knight } from "./DOMKnight";
import { boardSet } from "./DOMKnight";

// Called in index, with array (path) output by knightPath function
// This animateknight module moves around the knight and plays some sounds

export function animateKnight(path) {
  let cutOffStart = path.shift();
  markStart(cutOffStart);
  for (let i = 0; i < path.length; i++) {
    setTimeout(() => {
      toSquare(path[i]);
    }, 800 * i);
    if (i < path.length - 1) {
      setTimeout(() => {
        numberSquare(path[i], i);
      }, 800 * i + 700);
    }
  }
}

function toSquare(coords) {
  let target = elementFrom(coords);
  playSoundAndRemoveFlag(target);
  knight(target);
}

function markStart(coords) {
  let start = elementFrom(coords);
  start.textContent = "start";
}

function numberSquare(coords, i) {
  let target = elementFrom(coords);
  target.textContent = `${i + 1}`;
}

function playSoundAndRemoveFlag(element) {
  let flag = element.querySelector(".flagpole");
  if (flag) {
    flagSound.play();
    flag.remove();
    document.getElementById("flagcheck").classList.remove("checked-red");
    boardSet();
  } else {
    moveSound.play();
  }
}

function elementFrom(coords) {
  let string = `${coords[0]}-${coords[1]}`;
  return document.querySelector(`[data-coords="${string}"]`);
}

export function clearSqaureNumbering() {
  const squares = Array.from(
    document.querySelectorAll(".square:not(:has(img))")
  );
  squares.forEach((square) => {
    square.textContent = "";
  });
}
