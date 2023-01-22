export function movesFrom(x, y) {
  let movesArray = []
  movesArray = movesArray.concat(moveNorth(x, y))
  movesArray = movesArray.concat(moveEast(x, y))
  movesArray = movesArray.concat(moveSouth(x, y))
  movesArray = movesArray.concat(moveWest(x, y))
  return movesArray.filter(value => value !== undefined)
}
// this module could be way shorter, just add and subract 1 and 2 and remove any arrays containing a value < 1 || > 9 
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