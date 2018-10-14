//https://www.codewars.com/kata/remove-duplicates-from-list/train/javascript

//option 1:
function distinct(a) {
  let result = [];
  a.forEach(function(item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  })
  return result;
}

//option 2:
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);
