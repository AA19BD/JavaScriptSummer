let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Здесь возьмет только 2 символа так как есть знак ? --><h1>
let result = text.match(myRegex);
console.log(result);//<h1>
