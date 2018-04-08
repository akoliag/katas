
function smallestInt(array) {
  let sorted = array.sort((a, b) => a - b);
  return sorted[0];
}

console.log(smallestInt([78,-56,232,-412,228]));
