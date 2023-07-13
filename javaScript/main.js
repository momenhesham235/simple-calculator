let output =  document.querySelector("input")

function Display(num){
    output.value += num;
}
function Clear(){
    output.value = "";
}
function Delete(){
    output.value = output.value.slice(0,-1)
}
function calculator(){
    try{
        output.value =  eval(output.value);
    }
    catch(err){
        output.value = "error"
    }
}