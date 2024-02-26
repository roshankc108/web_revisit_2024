// here we ar epractising functions again....
let x = 10;

function square() {
  return x * x;
}

console.log("square of " + x + " is " + square());

// Self-Invoking Functions
//The function above is actually an anonymous self-invoking function (function without name).
// (functions) ();

(function sqr() {
  console.log("im calling myself");
})();

// Arrow Function (ES6)

let yy = 10

// method 1
sqr = () =>{
    return x*x
}
console.log(sqr(yy))

// method 2
sqr1 = () => x*x
console.log(sqr1(yy))

// method 3
sqr2 = yy => x*x 
console.log(sqr2(yy))

