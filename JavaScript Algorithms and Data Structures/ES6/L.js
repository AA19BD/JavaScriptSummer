const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
/*
Use Destructuring Assignment to Assign Variables from Objects
Destructuring allows you to assign a new variable name when extracting values.
You can do this by putting the new name after a colon when assigning the value.

*/
console.log(highToday)