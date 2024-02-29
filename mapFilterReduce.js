// Filter ()
// creates a new array filled with elements that pass a test provided by a function.
// does not execute the function for empty elements.
// method does not change the original array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = array.filter((x) => {
  return x % 2;
  //all num disible by 2 will be removed
});
console.log(result);

// Map ()
// to find square of each element of the given array

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = array1.map((value) => {
  return value ** 2;
});
console.log(result);

// Reduce()
//
const array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

var result = array2.reduce((initial, next) => {
  return initial - next;
});
console.log(
  "array 1st element index 0 element will be subratcted with each and every other element"
);
console.log(
  "ex 9 - 8 , then 1st becomes 1 and again 1 - 7 and again -6 - 6 and so on till the last element"
);
console.log(result);