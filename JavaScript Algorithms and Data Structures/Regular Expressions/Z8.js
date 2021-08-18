let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex,''); 
//мы нашли пустые пробелы ->(/^\s+|\s+$/g),после чего их заменили на ''  с помощью replace в hello.

console.log(result);//Hello, World!