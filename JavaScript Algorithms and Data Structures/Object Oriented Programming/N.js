function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
let dog = new Dog("Bulbo");
console.log(dog.constructor===Dog);//Даст ложно,так как мы в ручную установили прототип для объекта и перезаписали все свойства,и constructor property думает что все свойства объекта не были созданы при помощи конструктора и это не является экзэмпляром объекта
console.log(dog.eat());
console.log(dog.numLegs);
console.log(dog.describe());

/*Есть один важный побочный эффект ручной установки прототипа на новый объект.
Он стирает свойство конструктора! 
Это свойство можно использовать для проверки того, какая функция-конструктор создала экземпляр,
но, поскольку свойство было перезаписано, теперь оно дает ложные результаты:
*/