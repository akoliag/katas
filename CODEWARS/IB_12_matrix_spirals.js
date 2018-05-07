//Write a function that accepts an integer N and returns a NxN spiral matrix.

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]); //pushes n times empty subarrays
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
  }
}

console.log(matrix(5));
