var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  let result = "";
  if (strokes === 1) {
    result = "Hole-in-one!";
  } else if (strokes <= par - 2) {
    result = "Eagle";
  } else if (strokes === par - 1) {
    result = "Birdie";
  } else if (strokes === par) {
    result = "Par";
  } else if (strokes === par + 1) {
    result = "Bogey";
  } else if (strokes === par + 2) {
    result = "Double Bogey";
  } else if (strokes >= par + 3) {
    result = "Go Home!";
  }

  return result;
  // Only change code above this line
}

golfScore(5, 4);
