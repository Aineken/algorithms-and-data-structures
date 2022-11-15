var isValid = function (sub) {
  if (sub.length % 2 !== 0) {
    console.log("are you moking on me?");
    return false;
  }
  let container = [];

  for (let i = 0; i < sub.length / 2; i++) {
    switch (sub[i]) {
      case "(":
        break;
      case "{":
        break;
      case "[":
        break;
    }
  }
  return true;
};

console.log(isValid("{}"));
