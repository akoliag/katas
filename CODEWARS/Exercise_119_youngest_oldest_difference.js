//https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members

//Option 1:
function differenceInAges (ages) {
    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
    return [min, max, diff]
}


//Option 2:
function differenceInAges(ages){
 let sorted = ages.sort((a, b) => a - b);
 let youngest = sorted[0];
 let oldest = sorted.slice(-1)[0];
 let difference = oldest - youngest;
 return [youngest, oldest, difference];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
