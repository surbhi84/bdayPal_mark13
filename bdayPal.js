var dob = document.querySelector("#b-date");
var calcBtn= document.querySelector(".calc-btn");
var outputDiv= document.querySelector(".output-div");


calcBtn.addEventListener("click",clickHandler)


function clickHandler(){
const input = inputVal();
console.log(input.dobVal)

}

function inputVal(){
    return { dobVal : dob.value}
}


