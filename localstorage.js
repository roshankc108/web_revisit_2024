// local storage practises

let key = prompt("Enter your email")
let value = prompt("Enter you password")

// adding in local storage
localStorage.setItem(key,value)

// getting value
localStorage.getItem(key,value)
console.log(`Value of ${key} is ${value}`)

// delete items
console.log(`Item ${key} is deleted`);
localStorage.removeItem(key);

// to save multiple datas at same time run do while loops

// to  print all data i.e. fetch data :
// let length = localStorage.length;
// for (i = 0; i < length;i++){
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     document.write(`${key} ${value}<br>`);
// }