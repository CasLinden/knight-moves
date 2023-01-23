// This function is used in the factory function Node
// It gives each Node an array of possible moves from that position

export function movesFrom(x, y) {
  let movesArray = []
  movesArray = movesArray.concat(moveNorth(x, y))
  movesArray = movesArray.concat(moveEast(x, y))
  movesArray = movesArray.concat(moveSouth(x, y))
  movesArray = movesArray.concat(moveWest(x, y))
  return movesArray.filter(value => value !== undefined)
}
// This is the same as doing +1 -1 +2 -2 in 8 combinations and filtering anything <1 >9
// I blush not to have thought of that but hey, this works too. 
function moveNorth(x, y) {
  if (y + 2 > 8) return;
  let mv = [];
  if (!(x - 1 < 1)) {
    mv.push([x - 1, y + 2]);
  }
  if (!(x + 1 > 8)) {
    mv.push([x + 1, y + 2]);
  }
  return mv;
}

function moveEast(x, y) {
  if (x + 2 > 8) return;
  let mv = [];
  if (!(y + 1 > 8)) {
    mv.push([x + 2, y + 1]);
  }
  if (!(y - 1 < 1)) {
    mv.push([x + 2, y - 1]);
  }
  return mv;
}

function moveSouth(x, y) {
  if (y - 2 < 1) return;
  let mv = [];
  if (!(x - 1 < 1)) {
    mv.push([x - 1, y - 2]);
  }
  if (!(x + 1 > 8)) {
    mv.push([x + 1, y - 2]);
  }
  return mv;
}

function moveWest(x, y) {
  if (x - 2 < 1) return;
  let mv = [];
  if (!(y + 1 > 8)) {
    mv.push([x - 2, y + 1]);
  }
  if (!(y - 1 < 1)) {
    mv.push([x - 2, y - 1]);
  }
  return mv;
}