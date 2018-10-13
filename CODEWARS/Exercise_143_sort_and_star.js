//https://www.codewars.com/kata/sort-and-star/train/javascript

//option 1:
function twoSort(s) {
 let sorted = s.sort()
 let first = sorted[0];
 return first.split('').join('***');
}


//option 2:
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
