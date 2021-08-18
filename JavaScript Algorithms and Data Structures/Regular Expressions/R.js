let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);//31 символа
/*
\w->каждую букву выведет
\w+->слова без пробелов
\w*->слова c пробеломи
\w<------>[A-Za-z0-9_]-> SAME


*/