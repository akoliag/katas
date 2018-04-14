//Given an integer return an integer that is the reverse ordering of numbers

//Option 1:
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    if (n < 0) {
      return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

console.log(reverseInt(-578));

//Option 2:

function reverseInt1(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt1(-123));
