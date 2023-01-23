import { Node } from "./node";

// In this function:
// The Node factory function is called for the start position with an array positions or "moves", 
// Subsequent moves are also passed through factory "Node", creating a potentially endless data structure.
// Subsequent moves are given a .prev, which is always the previous node or ""
// Moves are evaluated 'breadth first', when isTarget() returns true, path() returns a chain of previous nodes
export function knightPath(start, target) {
  let root = Node(start)
  let queue = [root];
  enqueueMovesOf(root);

  function enqueueMovesOf(position) {
    let moves = position.moves;
    let movesNodes = moves.map((move) => Node(move));
    movesNodes.forEach((node) => {
      node.prev = position;
      queue.push(node);
    });
  }

  while (queue.length > 0) {
    let first = queue.shift();
    if (isTarget(first)) {
      return path(first);
    }
    enqueueMovesOf(first);
  }

  function isTarget(move) {
    if (move.x === target[0] && move.y === target[1]) {
      return true;
    } else {
      return false;
    }
  }

  function path(node, pathCoords = []) {
    pathCoords.push(node.coords);
    if (!node.prev) {
      return pathCoords.reverse();
    }
    return path(node.prev, pathCoords);
  }
}

