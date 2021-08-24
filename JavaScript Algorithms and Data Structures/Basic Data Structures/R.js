function countOnline(usersObj) {
  // Only change code below this line
  let countOnline = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      countOnline++;
    }
  }
  return countOnline;
  // Only change code above this line
}
// console.log(countOnline);
console.log(countOnline)