//https://www.codewars.com/kata/two-to-one/train/javascript

//option 1
function longest(s1, s2) {
  let long = (s1 + s2).split('').sort();
  let sorted = [];
  for (i = 0; i <= long.length; i ++){
    if (sorted.includes(long[i]) === false) {
      sorted.push(long[i]);
    }
  }
  return sorted.join('');
}
