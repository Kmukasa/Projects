

var input = document.getElementById("input_field");
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        alert(input.value);
    }
})