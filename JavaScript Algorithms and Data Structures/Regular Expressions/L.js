let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result);

/* 
For example, /a+/g would find one match in abc and return ["a"].
Because of the +, it would also find a single match in aabc and return ["aa"].



*/
// +->Match Characters that Occur One or More Times