// JS for landing page of dictionary

function init() {
    var input = document.getElementById("input_field");
if(input != undefined){
    input.addEventListener('keyup', function(){
        if(event.keyCode == 13){
            var select = document.getElementById("option");
            var opt = select[select.selectedIndex].text

            var request = new XMLHttpRequest();
            request.open("GET", "definitions.pug", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            searchQuery = {};

            if(opt == "Luganda - English"){
                searchQuery["translation"] = "Luganda - English";
            }
            else{
                alert(input.value + "English - Luganda")
                searchQuery["translation"] = " English - Luganda";
            }
            searchQuery["searchWord"] = input.value;
            request.send(searchQuery);
        }
    }, false);
}
}

// Object sent:
// SearchQuery = { 
//                  translation : English - Luganda,
//                  searchWord : Oli y otya
// }


