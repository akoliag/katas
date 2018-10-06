//https://www.codewars.com/kata/sum-mixed-array/train/javascript

function sumMix(x){
let arrSum = x.map(Number).reduce((a, b) => a + b, 0);
return arrSum;
}
