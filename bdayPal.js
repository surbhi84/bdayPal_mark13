var dob = document.querySelector("#b-date");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const dobVal = inputVal();

  if (inputValidation(input)) {
   

    checkPalindrome(input);
  } else {
    errorAlert();
  }
}

function inputVal() {
  return dob.value;
}

function inputValidation(input) {
  if (input.dobVal == "") return false;
  return true;
}

function inputForm(){
const date = 
}

console.log(checkPalindrome("mom"));

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
