//https://www.codewars.com/kata/check-the-exam
function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    score += (array1[i] === array2[i] ?
      4 :
      array2[i] === "" ?
      0 :
      -1);
  }

  return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "c", "b"]));
