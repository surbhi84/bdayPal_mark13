var dob = document.querySelector("#b-date");
var calcBtn= document.querySelector(".calc-btn");
var outputDiv= document.querySelector(".output-div");


calcBtn.addEventListener("click",clickHandler)


function clickHandler(){
const input = inputVal();

if(inputValidation(input)){
    console.log("success")
}
}

function inputVal(){
    return { dobVal : dob.value}
}

function inputValidation(input){
    console.log(input.dobVal)
 if(input.dobVal==  "") {
      outputDiv.innerText = "Please enter a Date.";
 }
 else{
    return true; }
}
