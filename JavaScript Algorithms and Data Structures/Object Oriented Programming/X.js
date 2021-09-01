function Bird() {
  let weight = 15;
  this.getWeight = () => {
    return weight;
  };
  // this.weight=15;
}
let duck = new Bird();

console.log(duck.getWeight());
//Use Closure to Protect Properties Within an Object from Being Modified Externally