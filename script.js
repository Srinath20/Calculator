var operater;
var result = document.getElementById("result");
//let numbers = document.querySelectorAll('.number');
// numbers.forEach(number => number.addEventListener("click",input));
let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click",input));
function input(e){
    const value = e.target.value;
    result.textContent +=value;
    console.log(value);
  }
function add(){
 // operater = document.getElementById("+").value;
  document.getElementById("result").value += "+";
  document.getElementById("result").textContent += "+";
}
function subtract(){
 // operater = document.getElementById("-").value;
  document.getElementById("result").value += "-";
  document.getElementById("result").textContent += "-";
}
function multiply(){
 // operater = document.getElementById("*").value;
  document.getElementById("result").value += "*";
  document.getElementById("result").textContent += "*";
}
function divide(){
//  operater = document.getElementById("/").value;
  document.getElementById("result").value += "/";
  document.getElementById("result").textContent += "/";
}

function operate(){ 

  const ans = eval(result.textContent);
  result.textContent = ans;
}
