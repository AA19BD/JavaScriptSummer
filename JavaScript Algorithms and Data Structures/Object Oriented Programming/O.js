function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));

//!!! an object inherits its prototype directly from the constructor 
//!!! function that created it. For example, here the Dog constructor creates the beagle object: