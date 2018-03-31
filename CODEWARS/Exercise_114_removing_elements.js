//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

//Option 1:
function removeEveryOther(arr) {
    const everySecond = [];
    for (var i = 0; i < arr.length; i+= 2) {
        everySecond.push(arr[i]);
    }
    return everySecond;
}

//Option 2:
function removeEveryOther(arr) {
  return arr.filter((item,index) => index % 2 === 0);
}
