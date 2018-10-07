//https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

//option 1:
function oddCount(n){
  let arr = [];
  for (let i = 1; i < n; i+= 2) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  return arr.length;
}

console.log(oddCount(9));

//option 2:
const oddCount = n => Math.floor(n/2) ;
