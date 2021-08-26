function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);//[ 'name', 'numLegs' ]
/*
!!name and numLegs are called own properties, 
!!because they are defined directly on the instance(canary) object.

!!In fact every instance of Bird will have its own copy of these properties. 
!!The following code adds all of the own properties of canary to the array ownProps:



*/