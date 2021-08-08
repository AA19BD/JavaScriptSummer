// Declare the myGlobal variable below this line
var myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
  /*
  Variables which are declared without the var keyword
  are automatically created in the global scope. 
  This can create unintended consequences elsewhere in your code or when running a function again.
  You should always declare your variables with var.
  */
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}