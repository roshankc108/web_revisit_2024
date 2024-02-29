// some basic dom manupulations starting

//prompt()

// let age = parseInt(prompt("Enter your age ?"));
// if (age > 50) {
//   document.write("You can driver");
// } else {
//   document.write("You are not eligible to drive.");
// }

// confirm()

// let decission = confirm("Allow the prompt to continue!");
// if (decission) {
//     let age = parseInt(prompt("Enter your age?"));
//     if (age >= 18) {
//         document.write("You can drive.");
//     } else {
//         document.write("You cannot drive bacchu.");
//     }
// }

//console formats

// console.log("I am normal log.");
// console.error("I'm 404 error.");
// console.info("I'm the info.");
// console.warn("I'm the warning.");
// console.debug("this is deubg");

let choice = parseInt(prompt("1.Google 2.Facebook 3.X 4.LinkedIn"));
switch (choice) {
  case 1:
    location.href = "https://www.google.com/";
    break;
  case 2:
    location.href = "https://www.fb.com/";
    break;
  case 3:
    location.href = "https://www.x.com/";
    break;
  case 4:
    location.href = "https://linkedin.com/";
    break;
  default:
    document.write("no choice made!");
    break;
}
