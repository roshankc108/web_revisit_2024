// Async/Await =>
// Async = makes a function return a promise
// Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

// Without reject condition

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     const dogWalked = true;
//     if (dogWalked) {
//       resolve("You have walked the dog 🦮");
//     } else {
//       reject("Ypu have not waled the dog");
//     }
//   }, 1500);
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     const workDone = true;
//     if (workDone) {
//       resolve("You have cleaned the kitchen");
//     } else {
//       reject("You have not cleaned the kitchen");
//     }
//   }, 1500);
// }

// function takeOutTrash() {
//   return new Promise((resolve, retunr) => {
//     const workDone = true;
//     if (workDone) {
//       resolve("You have taken out the trash");
//     } else {
//       rejcet("the trash is still in the house");
//     }
//   }, 1500);
// }

// async function doChores(){
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult =  await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("You finished all the chores.")
// }

// doChores()

// with reject condition

function walkDog() {
  return new Promise((resolve, reject) => {
    const dogWalked = true;
    if (dogWalked) {
      resolve("You have walked the dog 🦮");
    } else {
      reject("Ypu have not waled the dog");
    }
  }, 1500);
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const workDone = true;
    if (workDone) {
      resolve("You have cleaned the kitchen");
    } else {
      reject("You have not cleaned the kitchen");
    }
  }, 1500);
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    const workDone = false;
    if (workDone) {
      resolve("You have taken out the trash");
    } else {
      reject("the trash is still in the house");
    }
  }, 1500);
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores.");
  } catch (error) {
    console.error(error);
  }
}
doChores()
