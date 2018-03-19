//https://www.codewars.com/kata/a-needle-in-the-haystack

//Option 1:
function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${[i]}`
    }
  }
}
console.log(findNeedle(['hay', 'junk', 'needle', 'moreJunk']));

//Option 2:
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
