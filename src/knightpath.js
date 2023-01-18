import { Node } from "./node";
import { currentPosition, currentTarget } from "./knight";

let start = Node([4, 5]);
let finish = [8, 6];

export function knightPath(root, target) {
  let queue = [root];
  enqueueMovesOf(root);

  function enqueueMovesOf(root) {
    let moves = root.moves;
    let movesNodes = moves.map((move) => Node(move));
    movesNodes.forEach((node) => {
      node.prev = root;
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

