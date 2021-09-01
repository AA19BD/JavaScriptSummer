function Dog(name) {
  this.name = name;
}

// Dog.prototype.r = 2;//----->this works ,but without  Dog.prototype = {}
// Dog.prototype.eat = function () {
//   console.log('dd');
// };

Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("breakfast");
  },
  describe: function () {
    console.log(`My name is ${this.name}`);
  },
};

let dog = new Dog("Bulbo");
console.log(dog.eat());
console.log(dog.numLegs);
console.log(dog.describe());
