/*memoisation - store the argument of each function call along with the
result. If the function is called again with the same arguments, return the
precomputed result, rather than running the function again.
*/

function memoizer(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}


function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoizer(slowFib);

console.log(fib);

//...args - we don't know with how many arguments this function will be called
//so we take all of them when writing ...args
