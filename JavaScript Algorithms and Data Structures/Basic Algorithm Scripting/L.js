function frankenSplice(arr1, arr2, n) {
  // let Arr1=arr1.slice();
  let Arr2 = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    Arr2.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(Arr2);
  return Arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
