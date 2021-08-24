function forecast(arr) {
  let newArr = arr.slice(2, 4);//slice(index of start,index of stop(not including))
  //[ 'warm', 'sunny' ]
  return newArr;
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
/*
Rather than modifying an array, slice() 
copies or extracts a given number of elements to a new array,
leaving the array it is called upon untouched.

*/
