const user = {
  name: "Abylay",
  phone: "123",
  age: 20,
  married: false,
  purchases: ["phone", "laptop"],
  sayName: function () {
    console.log(this);
  },
};

user.sayName();

//THIS
// console.log(this);
