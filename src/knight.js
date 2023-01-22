import knightSVG from "./assets/knight.svg";
import flagpole from "./assets/flagpole.svg";
import { clearOutput } from "./displayoutput";
import { moveSound, flagSound } from "./sounds";

//place the knight on the board, make it draggable and allow target square selection
export function knight(coords) {
  let target = document.querySelector(`[data-coords="${coords}"]`);
  let knight = knightImg();
  target.appendChild(knight);
  draggableKnight(knight);
  targetsClickable();
}
knight("4-5");

export function currentPosition() {
  let knight = document.querySelector(".knight");
  let position = knight.parentElement;
  let x = +position.getAttribute("data-x");
  let y = +position.getAttribute("data-y");
  return [x, y];
}

export function currentTarget() {
  let flagpole = document.querySelector(".flagpole");
  let position = flagpole.parentElement;
  let x = +position.getAttribute("data-x");
  let y = +position.getAttribute("data-y");
  return [x, y];
}

function emptySquares() {
  return Array.from(document.querySelectorAll(".square:not(:has(img))"));
}

function draggableKnight(img) {
  img.addEventListener("mousedown", startDragging, { once: true });
}

function startDragging() {
  document.body.style.cursor = "grabbing";
  document.getElementById("knightcheck").classList.remove("checked-green");
  let otherSquares = emptySquares();
  otherSquares.forEach((square) =>
    square.addEventListener("mouseup", dropKnight)
  );
}

function dropKnight() {
  document.querySelector(".knight").remove();
  document.getElementById("knightcheck").classList.add("checked-green");
  let coords = this.getAttribute("data-coords");
  clearOutput();
  moveSound.play();
  knight(coords);
  document.body.style.cursor = "pointer";
  let otherSquares = emptySquares();
  otherSquares.forEach((square) => {
    square.removeEventListener("mouseup", dropKnight);
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
  flagSound.play()
  clearOutput();
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

function boardSet() {
  if (
    document.querySelector(".knight") &&
    document.querySelector(".flagpole")
  ) {
    document.getElementById("traverse-button").classList.add("set");
  } else {
    document.getElementById("traverse-button").classList.remove("set");
  }
}
