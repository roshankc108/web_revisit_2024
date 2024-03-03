// closure & lexical scope example :

//  lexical scope:

// function    funcOut(){
//     let naam = "Roshan"
//     function innerFunc(){
//         console.log(naam)
//     }
//     innerFunc()
// }
// funcOut()

// closure example:

function funcOut() {
  const naam = "Roshan";
  function funcInner() {
    console.log(naam);
  }
  //   return funcInner(); yo garda galat hunxa beacuse we should only return the reference not the whole functioncall
  return funcInner;
}

const funTask = funcOut();
funTask();
