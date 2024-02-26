// for loops
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

for (let i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
    console.log(array[i]);
  }
}

const student = {
  name: "Roshan KC",
  rollno: 19,
  address: "butwal",
  age: 23,
};

// for/in

console.log("for in is used to print object keys");
for (x in student) {
  console.log(x);
}

console.log("for in is used to print object values");
for (x in student) {
  console.log(student[x]);
}

// for/of
console.log("loops through the values of an iterable item");
let lang = "javascript";
for (x of lang) {
  console.log(x);
}

//while & do  while loops

let num = 10;

while (num > 0) {
  console.log(num);
  num -= 1;
}


console.log("even though condition is wrong do will atleast once run")
//this is useful in consle apps where we atleast once need to run the loop and ask user for input

x = 0
do {
    console.log(x)
}while(x>0)
