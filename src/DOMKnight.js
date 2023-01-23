import knightSVG from "./assets/knight.svg";
import flagpole from "./assets/flagpole.svg";
import { clearOutput } from "./displayoutput";
import { moveSound, flagSound } from "./sounds";
import { clearSqaureNumbering } from "./animateknight";

//place the knight on the board, make it draggable and allow target square selection
export function knight(DOMElement) {
  if (document.querySelector(".knight")) {
    document.querySelector(".knight").remove();
  }
  let knight = knightImg();
  DOMElement.appendChild(knight);
  moveableKnight(knight);
  targetsClickable();
}
let defaultStart = document.querySelector('[data-coords="4-5"]');
knight(defaultStart);

function emptySquares() {
  return Array.from(document.querySelectorAll(".square:not(:has(img))"));
}

function allSquares() {
  return Array.from(document.querySelectorAll(".square"));
}

function moveableKnight(img) {
  img.addEventListener("click", startMoving, { once: true });
}

function startMoving() {
  document.querySelector('body').classList.add("dragging-knight")
  document.getElementById("knightcheck").classList.remove("checked-green");
  document.querySelector('.knight-condition').textContent = "Click to drop the knight"
  let squares = emptySquares();
  squares.forEach((square) => {
    square.addEventListener("click", dropKnight)
    square.removeEventListener("click", setTargetSquare)
  });
}

function dropKnight() {
  document.getElementById("knightcheck").classList.add("checked-green");
  let coords = this.getAttribute("data-coords");
  console.log('Iran')
  console.log(this)
  clearOutput();
  clearSqaureNumbering();
  moveSound.play();
  knight(this);
  document.querySelector("body").classList.remove("dragging-knight");
  document.querySelector(".knight-condition").textContent =
    "Click the knight to move it";
  let squares = allSquares();
  squares.forEach((square) => {
    square.removeEventListener("click", dropKnight);
  });
}


function targetsClickable() {
  let otherSquares = emptySquares();
  otherSquares.forEach((square) => {
    square.addEventListener("click", setTargetSquare);
  });
}

function setTargetSquare() {
  let oldFlag = document.querySelector(".flagpole");
  if (oldFlag) oldFlag.remove();
  let flag = flagpoleImg();
  this.appendChild(flag);
  flagSound.play();
  clearOutput();
  clearSqaureNumbering();
  document.getElementById("flagcheck").classList.add("checked-red");
  boardSet();
}

function knightImg() {
  let img = document.createElement("img");
  img.src = knightSVG;
  img.classList.add("knight");
  img.setAttribute("draggable", "false");
  return img;
}

function flagpoleImg() {
  let img = document.createElement("img");
  img.src = flagpole;
  img.classList.add("flagpole");
  img.setAttribute("draggable", "false");
  return img;
}

export function boardSet() {
  if (
    document.querySelector(".knight") &&
    document.querySelector(".flagpole")
  ) {
    document.getElementById("traverse-button").classList.add("set");
  } else {
    document.getElementById("traverse-button").classList.remove("set");
  }
}

export function currentKnightPosition() {
  let knight = document.querySelector(".knight");
  let position = knight.parentElement;
  let x = +position.getAttribute("data-x");
  let y = +position.getAttribute("data-y");
  return [x, y];
}

export function currentFLagPosition() {
  let flagpole = document.querySelector(".flagpole");
  let position = flagpole.parentElement;
  let x = +position.getAttribute("data-x");
  let y = +position.getAttribute("data-y");
  return [x, y];
}
