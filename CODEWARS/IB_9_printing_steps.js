//Write a function that accepts a positive number N. The function should console
//log a step shape with N levels using the # character. Make sure the step has
//spaces on the right hand side.

//Example:
//steps(3)
//   '#   '
//   '##  '
//   '### '

//option 1:
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

console.log(steps(7));

//option 2 - recursive solution:

function steps1(n, row = 0, stair = ''){
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

console.log(steps1(4));
