//this func clear all the values
function clearScreen(){ 
       document.getElementById("result").value="0";
}
//this function display the values
function display(value)
{
    document.getElementById("result").value +=value;
}
//this function evaluates the expression and return result
function calculate(){
var p=document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value=q;
} 