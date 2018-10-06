//https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

//option 1:
function hero(bullets, dragons){
  return bullets / dragons >= 2 ? true : false;
}

//option 2:
function hero(bullets, dragons){
return dragons * 2 <= bullets;
}
