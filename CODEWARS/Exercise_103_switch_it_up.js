//https://www.codewars.com/kata/switch-it-up/train/javascript


//Option 1:
function switchItUp(number) {

  switch (true) {
    case number === 0:
      return 'Zero';
      break;
    case number === 1:
      return 'One';
      break;
    case number === 2:
      return 'Two';
      break;
    case number === 3:
      return 'Three';
      break;
    case number === 4:
      return 'Four';
      break;
    case number === 5:
      return 'Five';
      break;
    case number === 6:
      return 'Six';
      break;
    case number === 7:
      return 'Seven';
      break;
    case number === 8:
      return 'Eight';
      break;
    case number === 9:
      return 'Nine';
      break;
  }
}

console.log(switchItUp(9));

//Option 2:
switchItUp1 = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]

console.log(switchItUp1(5));

//Option 3:

function switchItUp2(number) {

  var a = number;
  var b = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  };
  return b[a];

}
console.log(switchItUp2(3));
