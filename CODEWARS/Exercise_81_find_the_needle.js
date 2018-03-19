//https://www.codewars.com/kata/a-needle-in-the-haystack
function findNeedle(haystack) {
  for (var i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${[i]}`
    }
  }
}
console.log(findNeedle(['hay', 'junk', 'needle', 'moreJunk']));
