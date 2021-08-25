function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let max = 0;
  for (let i = 0; i, i < newStr.length; i++) {
    if (newStr[i].length > max) {
      max = newStr[i].length;
    }
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function findLongestWordLength(s) {
//     return s.split(' ')
//       .reduce(function(longest, word) {
//         return Math.max(longest, word.length)
//       }, 0);
//   }