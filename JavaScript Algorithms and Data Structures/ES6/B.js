function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";//not the same variable as the ->let i = "function scope";
    console.log("Block scope i is: ", i);//this i->block scope and only accessable in that block
  }
  console.log("Function scope i is: ", i);
  return i;
}
