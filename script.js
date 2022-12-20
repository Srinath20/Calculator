var num1;
var num2;
var operater;
var Result = document.getElementById("result");

function Num_9(){
  if(num1 == null){
    num1 = document.getElementById("9").value;
  }
  else{
    num2 = document.getElementById("9").value;
  }
}
function Num_8(){
  if(num1 == null){
    num1 = document.getElementById("8").value;
  }
  else{
    num2 = document.getElementById("8").value;
  }
}
function Num_7(){
  if(num1 == null){
    num1 = document.getElementById("7").value;
  }
  else{
    num2 = document.getElementById("7").value;
  }
}
function Num_6(){
  if(num1 == null){
    num1 = document.getElementById("6").value;
  }
  else{
    num2 = document.getElementById("6").value;
  }
}
function Num_5(){
  if(num1 == null){
    num1 = document.getElementById("5").value;
  }
  else{
    num2 = document.getElementById("5").value;
  }
}
function Num_4(){
  if(num1 == null){
    num1 = document.getElementById("4").value;
  }
  else{
    num2 = document.getElementById("4").value;
  }
}
function Num_3(){
  if(num1 == null){
    num1 = document.getElementById("3").value;
  }
  else{
    num2 = document.getElementById("3").value;
  }
}
function Num_2(){
  if(num1 == null){
    num1 = document.getElementById("2").value;
  }
  else{
    num2 = document.getElementById("2").value;
  }
}
function Num_1(){
  if(num1 == null){
    num1 = document.getElementById("1").value;
  }
  else{
    num2 = document.getElementById("1").value;
  }
}
function Num_0(){
  if(num1 == null){
    num1 = document.getElementById("0").value;
  }
  else{
    num2 = document.getElementById("0").value;
  }
}
function add(){
    operater = document.getElementById("+").value;
}
function subtract(){
    operater = document.getElementById("-").value;
}
function multiply(){
    operater = document.getElementById("*").value;
}
function divide(){
    operater = document.getElementById("/").value;
}

function operate(){
   if(operater == "+"){
    document.getElementById("result").innerText =  parseInt(num1) + parseInt(num2);
    console.log(parseInt(num1) + parseInt(num2));
   }
   if(operater == "-"){
    console.log(parseInt(num1) - parseInt(num2));
   }
   if(operater == "*"){
    console.log(parseInt(num1) * parseInt(num2));
   }
   if(operater == "/"){
    console.log(parseInt(num1)/parseInt(num2));
   }
}
function clear(){
  num1 = null;
  num2 = null;
  operater = null;
  clearAll();
}
function clearAll(){
  Result.textContent = '';
}