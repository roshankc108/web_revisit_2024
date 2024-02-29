// For in .... in arrays

let numArray = [4, 5, 8, 2, 9, 3, 0, 1, 7, 8];

for (i in numArray) {
  console.log(i);
}
// here we get only index printed because for in is used to access keys in object
// and index in array so insted of printing 4 ,5 8,. . .,8 it prints 0,1,2,...,n
console.log("");

// forEach()
// loops through each and every elements
numArray.forEach((value) => {
  console.log(value);
});

console.log("");
//For of ,,,, same like forEach
for (i of numArray) {
  console.log(i);
}

//Array from :
//we use "Array.from" in html collections 
// we will learn in future projects
let siteData = "This is a website data";
var temp = Array.from(siteData);
console.log(temp);
