function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);

console.log(myHouse instanceof House);

//!!!!!Мы используем instanceof для проверки был ли создан объект при помощи конструктора !!

//!!В данном случае Да,так как мы при помощи оператора new вызвали конструктор 
//!!и создали объект House со свойством(property)->numBedrooms;


//If an object is created without using a constructor, 
//instanceof will verify that it is not an instance of that constructor: