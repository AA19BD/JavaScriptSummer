const arr = [2, 4, 5, 1, 7, 5, 2, 1];
const removedArr = arr.splice(1, 4)// [4, 5, 1, 7]
//but it also returns a new array 
//containing the value of the removed elements:

console.log('New array=>',(arr));
console.log('Removed array=>',(removedArr));
//splice( index on the array from which to begin removing elements, the number of elements to delete)