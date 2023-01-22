import { chessNotation } from "./chessNotation"

export function displayPath(path) {
  let outputContainer = document.querySelector('.output')
  clearOutput()
  path.forEach(element => {
    outputContainer.appendChild(makeSpan(element))
  });
}

export function clearOutput() {
   let outputContainer = document.querySelector(".output");
   while (outputContainer.firstChild) {
     outputContainer.removeChild(outputContainer.firstChild);
   }
}

function makeSpan(coords) {
  let div = document.createElement("div");
  div.textContent = chessNotation(coords);
  div.classList.add('output-tile')
  return div
}


