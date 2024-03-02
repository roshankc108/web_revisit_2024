// promises in js

// js promise says " I Promise a Result!"
// "Producing Code " is code that can take some time.
// "Consuming Code" is code that must wait for the result
// A promise is an object that links Producing code and consuming code


// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    // const data = false;

    // If data fetching is successful, we resolve the promise with the data
    resolve(data);
    
    // If there's an error while fetching data, we reject the promise
    reject("Error fetching data!");
  }, 2000);
});

// Using the promise
fetchData
  .then((data) => {
    // executes when the promise is resolved
    console.log(data);
  })
  .catch((error) => {
    // executes when the promise is rejected
    console.error(error);
    // After 2 seconds: Data fetched successfully!
  });
