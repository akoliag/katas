//https://www.codewars.com/kata/multiple-of-index/train/javascript

//Option 1:
function multipleOfIndex(array) {
  var multiple = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % i == 0) {
      multiple.push(array[i]);
    }
  }
  return multiple;
}

//Option 2:

multipleOfIndex1= a => a.filter((x,i)=> x  % i == 0)

console.log(multipleOfIndex([2, 5, 6, 11, 12, 16]));
console.log(multipleOfIndex1([2, 5, 6, 11, 12, 16]));
