function Dog(name, color) {
  (this.name = name), (this.color = color), (this.numLegs = 4);
}

let terrier = new Dog("Bulbo", "red");
console.log(terrier.name); //Bulbo
console.log(terrier.color); //red
console.log(terrier.numLegs);
