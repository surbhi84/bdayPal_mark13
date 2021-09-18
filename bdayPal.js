var dob = document.querySelector("#b-date");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const dobVal = inputVal();

  if (inputValidation(dobVal)) {
    const result = datePalindrome(dobVal);
    output(result);
  } else {
    errorAlert();
  }
}

function inputVal() {
  return dob.value;
}

function inputValidation(dobVal) {
  if (dobVal == "") return false;
  return true;
}

function datePalindrome(dobVal) {
  const date = dobVal.replaceAll("-", "");
  console.log(date);
  return checkPalindrome(date);
}

function checkPalindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
  if (reverse == str) return true;
  return false;
}

function errorAlert() {
  outputDiv.innerText = "Please enter a Date.";
}

function output(result) {
  if (result == true) {
    outputDiv.innerText = "Congratulations your BIRTHDAY IS A PALINDROME";
  } else {
    outputDiv.innerText = "OOPSS your Birthday is not a PALINDROME";
  }
}
