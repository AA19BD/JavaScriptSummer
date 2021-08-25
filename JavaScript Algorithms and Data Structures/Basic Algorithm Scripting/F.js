function confirmEnding(str, target) {
  return str.substring(Math.abs(target.length - str.length)) == target;
  //return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
