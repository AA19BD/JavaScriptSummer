function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  // eat: function() {
  //   console.log("nom nom nom");
  // }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  // eat: function() {
  //   console.log("nom nom nom");
  // }
};

function Animal() {
  //supertype or parent
}

Animal.prototype = {
  constructor: Animal,
  surname:'sdsf',
  eat: function () {//hat defined behaviors shared by all animals:
    console.log("nom nom nom");
  },
};

let animal= new Animal();
let cat1=new Cat('xxx');//gave name to cat

console.log(animal.eat());
console.log(cat1.name);// что то свое добавили


Cat.prototype=new Animal();
let cat=new Cat('kisa');
console.log(cat.eat());