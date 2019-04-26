// JS for landing page of dictionary
function init() {
    var input = document.getElementById("input_field");
if(input != undefined){
    input.addEventListener('keyup', function(){
        if(event.keyCode == 13){
            alert(input.value);
        }
    }, false);
}
}


