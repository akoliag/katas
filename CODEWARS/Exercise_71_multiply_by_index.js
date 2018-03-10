
function multipliedByIndex(array) {
  var multiple = [];
  for (var i = 0; i < array.length; i++){
    multiple.push(array[i] * i);
  }
  return multiple;
}
console.log(multipliedByIndex([9, 18, 6, 4]));
