//https://www.codewars.com/kata/filling-an-array-part-1/train/javascript

function arr(num) {
  let filled = [];
  for (let i = 0; i < num; i++){
    filled.push(i);
  }
  return filled;
}

console.log(arr(6));
