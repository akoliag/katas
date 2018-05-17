//Print out the n-th entry in the fibonacci series.
//The fibonacci series is an ordering of numbers where each number
//is the sum of the preceeding two.
//For example:
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Iterative solution:
function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++){
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }
return result[n];
}

console.log(fib(6));

//Recursive solution:

function fib1(n) {
  if (n < 2) {
    return n;
  }
  return fib1(n - 1) + fib1(n - 2);
}

console.log(fib1(7));
