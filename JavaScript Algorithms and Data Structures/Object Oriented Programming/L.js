function Dog(name) {
  this.name = name; //own property
}
//!!!constructor works on primitive types and instanceof doesn't:
//!!!constructor if you want to check if the variable is a string, number or boolean and it doesn't matter if it's a primitive type or an object.

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}

let dog = new Dog("Bulbo");
console.log(joinDogFraternity(dog));
console.log(dog instanceof Dog);


/*
Note: Since the constructor property can be overwritten
(which will be covered in the next two challenges)
it’s generally better to use the instanceof method to check the type of an object.
*/