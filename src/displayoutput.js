import { chessNotation } from "./chessNotation"

export function displayPath(path) {
  let outputContainer = document.querySelector('.output')
  while (outputContainer.firstChild) {
    outputContainer.removeChild(outputContainer.firstChild)
  }
  path.forEach(element => {
    outputContainer.appendChild(makeSpan(element))
  });
}

function makeSpan(coords) {
  let span = document.createElement("span");
  span.textContent = chessNotation(coords);
  return span
}


