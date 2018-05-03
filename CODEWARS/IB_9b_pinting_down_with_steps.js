function printNumberWithStep(n, step) {
  for (i = n; i >= 0; i-= step) {
    console.log(i);
  }
}

console.log(printNumberWithStep(12,2));
