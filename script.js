var result = document.getElementById("result");
let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click",input));
function input(e){
    const value = e.target.value;
    result.textContent +=value;
  }
function operate(){ 

  const ans = eval(result.textContent);
  result.textContent = ans;
}
