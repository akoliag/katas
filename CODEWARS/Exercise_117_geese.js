//https://www.codewars.com/kata/filter-out-the-geese

//Option 1:
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
};

//Option 2:

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var geeseRemoved = [];

  for (let i = 0; i < birds.length; i++) {
    let shouldAddBird = true;
    for(let y = 0; y < geese.length; y++) {
      if (birds[i] === geese[y]) {
        shouldAddBird = false;
        break;
      }
    }

    if(shouldAddBird) {
      geeseRemoved.push(birds[i]);
    }
  }

  return geeseRemoved;
};

console.log(gooseFilter(["Steinbacher", "Duck", "Toulouse", "Pata", "Toulouse", "Kaczka"]));
