let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);//6-идет подсчет пробелов тоже

//\W->[^A-Za-z0-9_]