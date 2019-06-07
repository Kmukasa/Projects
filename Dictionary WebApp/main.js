// JS for landing page of dictionary

function init() {
    var input = document.getElementById("input_field");
if(input != undefined){
    input.addEventListener('keyup', function(){
        if(event.keyCode == 13){
            var select = document.getElementById("option");
            var opt = select[select.selectedIndex].text

            if(opt == "Luganda - English"){
                alert(input.value + " Luganda - English")
            }
            else{
                alert(input.value + " English - Luganda")
            }
        }
    }, false);
}
}


