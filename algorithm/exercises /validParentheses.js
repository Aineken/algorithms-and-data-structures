var isValid = function (s) {
  var stack = [];

  var map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (var i = 0; i < s.length; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
  //   if (sub.length % 2 !== 0) {
  //     console.log("are you moking on me?");
  //     return false;
  //   }
  //   let container = [];

  //   for (let i = 0; i < sub.length / 2; i++) {
  //     switch (sub[i]) {
  //       case "(":
  //         break;
  //       case "{":
  //         break;
  //       case "[":
  //         break;
  //     }
  //   }
  //   return true;
};

console.log(isValid("{[()]}()"));
