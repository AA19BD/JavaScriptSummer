function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = new Animal();
// Dog.prototype=Object.create(Animal.prototype); ->same
let beagle = new Dog();
//!!! now beagle inherits all of Animal's properties, including the eat method.
console.log(beagle.eat())//nom nom nom
console.log(beagle instanceof Animal)