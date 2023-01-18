export function board() {
  function makeTiles() {
    let board = document.getElementById("board-container");
    for (let i = 1; i < 65; i++) {
      let square = document.createElement("div");
      square.setAttribute("data-x", `${_xCoord(i)}`);
      square.setAttribute("data-y", `${_yCoord(i)}`);
      square.setAttribute("data-coords", `${_xCoord(i)}-${_yCoord(i)}`)
      square.classList.add('square')
      //color tiles:
      if (_yCoord(i) % 2 === 0 && + _xCoord(i) % 2 === 0) {
        square.classList.add("colored");
      } else if (_yCoord(i) % 2 !== 0 && +_xCoord(i) % 2 !== 0) {
        square.classList.add("colored");
      }
        board.appendChild(square);
    }
  }
  makeTiles()

  function _xCoord(i) {
    let modulo = i % 8
    if (modulo !== 0) {
      return modulo
    } else return 8
  }
  
  function _yCoord(i){
    if (i < 9) return 8
    if (i < 17) return 7
    if (i < 25) return 6;
    if (i < 33) return 5;
    if (i < 41) return 4;
    if (i < 49) return 3;
    if (i < 57) return 2;
    if (i < 65) return 1;
  }
}

board();