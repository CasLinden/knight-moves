export function chessNotation(coords) {
  let string = "";
  string += getLetter(coords[0]);
  string += coords[1];
  string += " "
  return string;
}

function getLetter(num) {
  switch (num) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
    case 5:
      return "E";
    case 6:
      return "F";
    case 7:
      return "G";
    case 8:
      return "H";
    default:
      return "Invalid input";
  }
}
