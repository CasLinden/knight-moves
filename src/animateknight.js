import { moveSound, flagSound } from "./sounds";
import { knight } from "./knight";


export function animateKnight(path) {
  path.shift()
  for (let i = 0; i < path.length; i++) {
    setTimeout(() => {
      toSquare(path[i])
    }, 800 * i);
  }
}

function toSquare(coords) {
  let targetString = `${coords[0]}-${coords[1]}`
  removeFlagAndPlaySound(targetString)
  document.querySelector(".knight").remove();
  knight(targetString)
  
}

function removeFlagAndPlaySound(targetString) {
   let target = document.querySelector(`[data-coords="${targetString}"]`);
   if (target.querySelector(".flagpole")) {
     target.querySelector(".flagpole").remove();
     flagSound.play()
   } else {
     moveSound.play()
   }
}