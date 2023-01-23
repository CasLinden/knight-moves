import "./styles/main.scss";
import { board } from "./board";
import { currentKnightPosition, currentFLagPosition } from "./DOMKnight";
import { Node } from "./node";
import { knightPath } from "./knightpath";
import { displayPath } from "./displayoutput";
import { animateKnight } from "./animateknight";

function armTraverseButton() {
  let btn = document.getElementById("traverse-button");
  btn.addEventListener("click", execute);
}
armTraverseButton();

function ready(btn) {
  if (document.getElementById("traverse-button").classList.contains("set")) {
    return true;
  }
  return false;
}

function execute() {
  if (!ready()) return;
  let start = currentKnightPosition();
  let end = currentFLagPosition();
  let path = knightPath(start, end);
  displayPath(path);
  animateKnight(path);
}
