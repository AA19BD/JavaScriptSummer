const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data"); //result
  } else {
    reject("Data not received"); //error
  }
});

makeServerRequest.then((result) => {
  //"We got the data"
  console.log(result);
});
makeServerRequest.catch((error) => {
  //"Data not received"
  console.log(error);
});
