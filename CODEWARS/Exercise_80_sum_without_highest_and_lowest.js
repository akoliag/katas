//https://www.codewars.com/kata/sum-without-highest-and-lowest-number
function sumArray(array) {
 if (array == null) {
 return 0;
 } else {

let sorted = array.sort(function(a,b) {
  return a - b;
});
 let sliced = sorted.slice(1, -1);

let sum = 0;
  for (var i = 0; i < sliced.length; i++){
     sum += sliced[i];
  }
  return sum;
  }
}

console.log(sumArray([1, -11, 12, 100]));
