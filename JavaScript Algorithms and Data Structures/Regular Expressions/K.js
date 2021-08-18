let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);

// To create a negated character set, you place a caret character (^) 
// after the opening bracket and before the characters you do not want to match.