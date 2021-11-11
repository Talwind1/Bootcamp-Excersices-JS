function passValidation(password) {
  if (password.length > 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

function passValidation2(password) {
  let passCheck = password.length > 7 ? "Strong" : "Weak";
  return passCheck;
}

function advancedCheck(password) {
  let advCheck =
    passValidation2(password) === "Strong" && /[A-Z]/.test(password)
      ? "Very Strong"
      : passValidation2(password);
  return advCheck;
}
