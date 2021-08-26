function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
hound.name = "NO Rupert";//changed manually
console.log(hound.name);

//!!Чтобы вызвать конструктор мы используем оператор new,который скажет JS создать экземпляр Dog()-->hound


//!!The new operator is used when calling a constructor.
//!!This tells JavaScript to create a new instance of Bird called blueBird
