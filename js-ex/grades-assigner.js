function gradesAssign(score) {
  let grade;
  if (score >= 0 && score <= 64) {
    grade = "F";
  } else if (score > 64 && score <= 69) {
    grade = "D";
  } else if (score > 69 && score <= 79) {
    grade = "C";
  } else if (score > 79 && score <= 89) {
    grade = "B";
  } else {
    grade = "A";
  }
  return grade;
}
