function strengthLevelChecker(password) {
  var strengthLevel = 0;
  var hasUppercase = false;
  var hasLowercase = false;
  var hasNumber = false;
  var hasSpecialChar = false;

  for (var i = 0; i < password.length; i++) {
    var char = password[i];
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    } else if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else {
      hasSpecialChar = true;
    }
  }

  if (password.length > 15) {
    strengthLevel++;
  }
  if (hasUppercase) {
    strengthLevel++;
  }
  if (hasLowercase) {
    strengthLevel++;
  }
  if (hasNumber) {
    strengthLevel++;
  }
  if (hasSpecialChar) {
    strengthLevel++;
  }

  var output = "";
  if (strengthLevel === 0) {
    output = "Password does not meet criteria, please enter a new password.";
  } else if (strengthLevel <= 2) {
    output = "Password does not meet criteria, please re-enter a password that meets all criteria.";
  } else {
    output = "Password is strong and meets all criteria.";
  }

  return output;
}

// Get user input
var password = prompt("Please enter your password for strength check:");

// Call the function and display the result
var result = strengthLevelChecker(password);
document.write(result);