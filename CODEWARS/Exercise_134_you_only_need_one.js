//https://www.codewars.com/kata/you-only-need-one-beginner/train/javascript

//option 1:
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
};

//option 2:
const check = (a,x) => a.includes(x);
