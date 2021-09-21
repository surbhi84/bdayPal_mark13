var dob = document.querySelector("#b-date");
var calcBtn = document.querySelector(".calc-btn");
var outputDiv = document.querySelector(".output-div");

calcBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const dobVal = inputVal();

  if (inputValidation(dobVal)) {
    const date = dateString(dobVal);
    const result = checkPalindrome(date);
    output(result, dobVal);
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

function dateString(dobVal) {
  const date = dobVal.replaceAll("-", "");
  return date;
}

function palindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  if (reverse == str) return true;
  return false;
}

function formats(date) {
  let year = date.slice(0, 4);
  let month = date.slice(4, 6);
  let day = date.slice(6, 8);

  let YYYYMMDD = date;
  let YYYYDDMM = year + day + month;
  let DDMMYYYY = day + month + year;
  let DDMMYY = day + month + year.slice(2, 4);
  let MMDDYY = month + day + year.slice(2, 4);
  let YYMMDD = year.slice(2, 4) + month + day;
  return { YYYYMMDD, YYYYDDMM, DDMMYYYY, DDMMYY, MMDDYY, YYMMDD };
}

function checkPalindrome(date) {
  let dateFormat = formats(date);
  let formatArray = Object.keys(dateFormat); //returns an array of keys stored as strings
  for (let i = 0; i < formatArray.length; i++) {
    if (palindrome(dateFormat[formatArray[i]]))
      return { bool: true, format: formatArray[i] };
  }
  return { bool: false };
}

function errorAlert() {
  outputDiv.innerText = "Please enter a Date.";
}

function output(result, dobVal) {
  var nearPal;
  if (result.bool == true) {
    outputDiv.innerText = `Congratulations your BIRTHDAY IS A PALINDROME in ${result.format} format.`;
  } else {
    outputDiv.innerText = `OOPSS your Birthday is not a PALINDROME`; //backticks are used for formatted strings
  }
}

function nearestPalindrome(date) {
  let i = 1;
  while (0 == 0) {
    if (i == 1000) {
      break;
    }
    let a = checkPalindrome(dateString(dateManipulate(date, i)));
    let b = checkPalindrome(dateString(dateManipulate(date, -1 * i)));
    if (a.bool == true) {
      console.log(a.format, dateManipulate(date, i));

      return dateManipulate(date, i);
    }
    if (b.bool == true) {
      console.log(b.format, dateManipulate(date, -1 * i));

      return dateManipulate(date, -1 * i);
    }
    i++;
  }
}

function dateManipulate(date, n) {
  let mydate;
  date = new Date(date); // Date() converts date to a particular format
  date.setDate(date.getDate() + n); //setDate() manipulates date itself

  if (date.getDate() < 10 && date.getMonth() + 1 < 10) {
    mydate = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
  } else if (date.getDate() < 10) {
    mydate = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
  } else if (date.getMonth() + 1 < 10) {
    mydate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  } else
    mydate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return mydate;
}
