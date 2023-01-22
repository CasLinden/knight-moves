import "./styles/main.scss";
import { board } from "./board";
import { currentPosition, currentTarget } from "./knight";
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
  let start = Node(currentPosition());
  let end = currentTarget();
  let path = knightPath(start, end);
  console.log(path)
  displayPath(path)
  animateKnight(path)
}
