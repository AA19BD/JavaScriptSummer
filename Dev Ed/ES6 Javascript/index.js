//OLD Javascript

var names = ["John", "Mike"];

var counter = 10;

var counter = 5; //we can redeclared variable

// console.log(counter);//5
//----------------------------------------------------------------

function sayName() {
  name = " Abylay";
  console.log(name);
}
// console.log(name);//name is not defined
sayName(); // Abylay

//----------------------------------------------------------------
function getBook(title, author) {
  //old way to od it
  return {
    title: title,
    author: author,
  };
}
var book = getBook("Harry Potter", "J.K.Rouling");
console.log(book);

//----------------------------------------------------------------
function multiple(a = 1, b = 300) {
  console.log(a * b);
}
multiple();
//----------------------------------------------------------------

//ES6
const toDoList = ["John", "Mike"];
// toDoList=['MIk'];//Assignment to constant variable.(error)

//----------------------------------------------------------------

let counter1 = 10;
counter1 = 5;

//----------------------------------------------------------------

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); //we have block scope here ->i only works here{..}
}

//----------------------------------------------------------------
const name1 = "Abylay";
console.log(`Hello my name is ${name1}`); //new way of working with string names(concatenation)
//----------------------------------------------------------------
function getBook1(title, author) {
  //new way to od it
  return {
    title,
    author,
  };
}
var book = getBook1("Harry Potter", "J.K.Rouling");
console.log(book);
//----------------------------------------------------------------

const myLocation = () => {
  //1 way
  console.log("myLocation");
};
myLocation();

const myLocation1 = (element) => {
  //if we have 1 parameter in ->(element)->we can not use ()
  //2 way
  console.log(`My location ${element}`);
};
myLocation1("Paris1");

const myLocation2 = (city, country) => {
  //if we have 2 parameter in ->(city, country)->we use ()
  //3 way
  console.log(`My location ${city},${country}`);
};
myLocation2("Paris2", "France");

const myLocation3 = (city, country) =>
  console.log(`My location ${city},${country}`); //4 way-if we return one line of code
myLocation3("Paris3", "France");

//------------------------------
const user = {
  name: "John",
  age: 20,
  sayName: function () {
    console.log(`My name ${this.name}`);
    const fullName = () => {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
    fullName();
  },
};
user.sayName();

//------------------------------
const multiple1 = (a = 100, b = 3.14) => {
  //(a=100,b=3.14)->default parameter
  console.log(a * b);
};
multiple1();
//------------------------------
//forEach
const shoppingList = ["John", "Mike",'Bob','Clark','James'];
shoppingList.forEach((item, index) => {
  
  console.log(`The index is ${index} and the item is ${item}`);
});
//------------------------------
//Map
const newList = shoppingList.map(item => item + " new");//=>Using map,we can copy shoppingList and modify that list
console.log(newList);
//------------------------------
//Filter
const filterList=shoppingList.filter(item=> item=='James');//function Filter will filter the items
console.log(filterList);


//------------------------------
//Class and constructor
class ShoppingList{
    constructor(items,numbers){
        this.items=items;
        this.numbers=numbers;
    }
    sayList(){
        console.log(this.items)
    }
}
// const myList1=new ShoppingList(['milk','Choco,Redbull'],3);
// console.log(myList1);
class Product extends ShoppingList{
    constructor(items,numbers,amount,cost){
        super(items,numbers);
        this.amount=amount;
        this.cost=cost;
    }
}
const product = new Product(['RedBull','Chocolate','Candy'],3,2,20);
// console.log(product);
product.sayList();


//------------------------------
//Promise
//Здесь не callback вызывает функцию,а наоборот функция(resolve,reject) вызывает callback(prom.then,prom.catch)

const prom = new Promise((resolve, reject) => {//функция prom вызывает через 2 сек функцию resolve({user: 'abylai',pass:"1213114"}) которая выводит data(200)
    setTimeout(() => {
        resolve({user: 'abylai',pass:"1213114"});//1-действие(если будет ошибка то вызовиться reject функция->catch)
        //terminal({ user: 'abylai', pass: '1213114' })
        reject(new Error("Something went wrong!"));//3-действие->terminal(Error: Something went wrong!)
    },2000);
});

prom.then(data => {//2-действие
    console.log(data);
});
prom.catch(error=>{//4-действие
    console.log(error);
});