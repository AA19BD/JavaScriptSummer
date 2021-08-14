class Thermostat {
  constructor(tempF) {
    this._tempF = tempF;
  }
  get temperature() {
    return (5 / 9) * (this._tempF - 32); //return  in Celsius
  }
  // get temperatureF(){
  //   return (this._tempF * 9.0) / 5 + 32;//return  in Fahrenheit
  // }
  set temperature(tempC) {
    this._tempF = (tempC * 9.0) / 5 + 32; //set in Fahrenheit
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);// 24.44 in Celsius

// const thermos1 = new Thermostat(22)
thermos.temperature = 26;//changing 
// // let temp = thermos.temperature; // 26 in Celsius
// console.log(temp)
