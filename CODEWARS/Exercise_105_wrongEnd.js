//https://www.codewars.com/kata/my-head-is-at-the-wrong-end/train/javascript

//Option 1:
function fixTheMeerkat(arr) {
 let fixed = [arr[2], arr[1], arr[0]];
 return fixed;
}

console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));

//Option 2:
var fixTheMeerkat= a => a.reverse();
