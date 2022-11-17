function promFunc(resolve, reject) {
  const randNum = Math.random() * 100;

  setTimeout(() => {
    if (randNum < 50) {
      resolve("you");
    } else {
      reject("it actually rejected");
    }
  }, 1000);
}

promFunc(
  (res) => {
    console.log(res);
  },
  (rej) => {
    console.log(rej);
  }
);
