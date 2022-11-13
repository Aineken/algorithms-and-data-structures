function solution(A, D) {
  let balance = 0;

  let fee = 5;
  let totalFee = 60;
  let cardFree = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      balance += A[i];
    } else {
      balance += A[i];
      cardFree.push(D[i]);
    }
  }

  if (cardFree || cardFree.length >= 3) {
    for (let j = 0; j < cardFree.length; j++) {
      console.log("yes");
    }

    totalFee = totalFee - fee;
  }
  console.log(balance - totalFee - 5);
  return balance - totalFee - 5;
}

const A = [100, 100, -10, -20, -30];
const B = [
  "2020-01-01",
  "2020-02-01",
  "2020-02-11",
  "2020-02-05",
  "2020-02-08",
];

solution(A, B);
