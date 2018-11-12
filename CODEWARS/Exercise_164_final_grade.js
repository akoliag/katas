//https://www.codewars.com/kata/students-final-grade/train/javascript

//option 1:
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

//option 2:
const finalGrade = (grade, projects) => grade > 90 || projects > 10 ? 100 : grade > 75 && projects > 4 ? 90 : grade > 50 && projects > 1 ? 75 : 0;

//option 3:
finalGrade = (exam, projects) => {
  switch (true) {
    case (exam > 90 || projects > 10):
      return 100
      break;
    case (exam > 75 && projects >= 5):
      return 90;
      break;
    case (exam > 50 && projects >= 2):
      return 75
      break;
    case (exam <= 55 || projects <= 2):
      return 0;
      break;

  }
}
