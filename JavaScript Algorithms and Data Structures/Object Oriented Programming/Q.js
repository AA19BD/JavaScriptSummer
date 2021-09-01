function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
// This is the same as let duck=new Animal();
let beagle = Object.create(Animal.prototype);
// This is the same as let beagle=new Animal();
console.log(duck.eat()); //nom nom nom
console.log(beagle.eat()); //nom nom nom


