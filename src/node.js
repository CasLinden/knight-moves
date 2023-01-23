import { movesFrom } from "./moves";

// This function is called node, but could also have been called vertex
// It is used to create a data structure to be traversed breadth-first, see knightpath module
export function Node(coords) {
  let x = +coords[0]
  let y = +coords[1]
  let moves = movesFrom(x, y)
  return {
    x,
    y,
    moves,
    coords: [x, y],
    coordString: `${x}-${y} `
  };
}