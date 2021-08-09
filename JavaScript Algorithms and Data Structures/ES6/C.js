function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";// naming constants is to use all uppercase letters
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp1");
