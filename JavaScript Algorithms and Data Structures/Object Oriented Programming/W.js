let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};
//!!!Use a Mixin to Add Common Behavior Between Unrelated Objects
let glideMixin = (obj) => {
  obj.glide = function () {
    console.log("I am gliding");
  };
};
glideMixin(bird);
glideMixin(boat);
bird.glide(); //I am gliding
boat.glide(); //I am gliding
