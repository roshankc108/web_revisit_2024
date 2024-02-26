// if

let x = 18;

if (x >= 18) {
  console.log("You're mature");
}

// if else

x = 7;
if (x < 18) {
  console.log("Youre a kid");
} else {
  console.log("mature");
}

// if else if else
x = 37;

if (x < 18) {
  console.log("kid");
} else if (x >= 18 && x <= 35) {
  console.log("Ypung");
} else {
  console.log("old");
}

//switch case

let gender = "m";
switch (gender) {
  case "m":
    console.log("male");
    break;
  case "f":
    console.log("female");
  default:
    console.log("rather not say");
    break;
}
