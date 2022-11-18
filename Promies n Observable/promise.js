const newItem1 = new Promise((res, rej) => {
  const randNum = Math.random() * 100;
  setTimeout(() => {
    if (randNum < 50) {
      res("you");
    } else {
      rej("it actually rejected");
    }
  }, 1000);
});
const newItem2 = new Promise((res, rej) => {
  const randNum = Math.random() * 100;
  setTimeout(() => {
    if (randNum < 50) {
      res("not me");
    } else {
      rej("it actually rejected");
    }
  }, 1000);
});
const newItem3 = new Promise((res, rej) => {
  const randNum = Math.random() * 100;
  setTimeout(() => {
    if (randNum < 50) {
      res("me");
    } else {
      rej("it actually rejected");
    }
  }, 1000);
});

// all (wait for every promise) or race (the first resolved/rejected promise)
Promise.all([newItem1, newItem2, newItem3])
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log(error);
  });

// const newItem = new Promise((res, rej) => {
//   const randNum = Math.random() * 100;
//   setTimeout(() => {
//     if (randNum < 50) {
//       res("you");
//     } else {
//       rej("it actually rejected");
//     }
//   }, 1000);
// });

// newItem
//   .then((text) => {
//     if (text === undefined) {
//       console.log("All good");
//     } else {
//       console.log(text);
//     }
//   })
//   .catch((error) => {
//     if (error === undefined) {
//       console.log("This is rejected");
//     } else {
//       console.log(error);
//     }
//   });
