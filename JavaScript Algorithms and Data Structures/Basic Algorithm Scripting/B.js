// function reverseString(str) {
//   let newArr='';
//   for(let i=str.length-1;i>=0;i--){
//     newArr+=(str[i]);
//   }
//   return newArr;
// }
const reverseString = (str) => str.split("").reverse().join("");

reverseString("hello");
