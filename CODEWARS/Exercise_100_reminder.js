//https://www.codewars.com/kata/find-the-remainder/train/javascript

//Option 1:
function remainder(a, b) {
  if (a === 0 || b === 0) {
    NaN;
  }
  return a > b ? a % b : b % a;
};

console.log(remainder(64, 7));


//Option 2:

function remainder1(a, b){
  return (a > b) ? a % b : b % a;
}

console.log(remainder1(64, 0));
