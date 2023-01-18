import './styles/main.scss'
import { board } from './board'
import { knight } from './knight'
import { Node } from './node';
import { knightPath } from './knightpath';


function execute() {
  let btn = document.getElementById('traverse-button')
  if (ready(btn)) {
    
  }
}


function ready(btn) {
  if (btn.classList.contains('set')) return true
  return false
}






