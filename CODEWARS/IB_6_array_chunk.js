//Given an array and chunk size, divide the array into many subarrays where each
//subarray is of lenght size

//option 1;
function chunk(array, size) {
  const chunked = [];
  for (let elem of array) {
    const last = chunked[chunked.length - 1]; //temp var

    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
}

console.log(chunk([9, 8, 7, 6, 5, 4, 3, 2, 0], 5));

//option 2:
function chunk1(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk1([9, 8, 7, 6, 5, 4, 3, 2, 0], 3));
