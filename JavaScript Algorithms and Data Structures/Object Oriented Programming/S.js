function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor == Animal); //false--> здесь duck был создан благодаря Bird() а не при помощи Animal()
/*!!!But duck and all instances of Bird should show that they were 
constructed by Bird and not Animal. To do so, you can manually set the constructor 
property of Bird to the Bird object:*/
