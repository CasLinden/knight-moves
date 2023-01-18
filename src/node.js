import { movesFrom } from "./moves";

export function Node(square) {
  let x = +square.getAttribute('data-x')
  let y = +square.getAttribute('data-y')
  let moves = movesFrom(x, y)
  return {
    x,
    y,
    moves,
    coords: `${x}-${y} `
  };
}

let fourFive = document.querySelector(`[data-coords="1-1"]`);
console.log(fourFive);
const example = Node(fourFive);
console.log(example)



// let q = document.getElementsByClassName('square')
// let arr = Array.from(q)
// console.log(arr)