import { movesFrom } from "./moves";

export function Node(coords) {
  let x = coords[0]
  let y = coords[1]
  let moves = movesFrom(x, y)
  return {
    x,
    y,
    moves,
    coords: [x, y],
    coordString: `${x}-${y} `
  };
}