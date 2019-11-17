// main.js
// Last Updated: 9/26/19
// JS for landing page of dictionary
var request = new XMLHttpRequest();

function init() {
    var input = document.getElementById("input_field");
    if(input != undefined){
    input.addEventListener('keyup', function(){
        if(event.keyCode == 13){

            var Query = {}
            Query["searchQuery"] = input.value;
            Query["translation"] = opt;

            var select = document.getElementById("option")
            var opt = select[select.selectedIndex].text;
            request.withCredentials = true;
            var url = "http://localhost:8000/definitions";
            request.open("GET", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(Query);
        }
    }, false);
}
}

request.onload = () => {
    // process response
    if (request.status == 200) {
        // parse JSON data
        console.log(request.response);
    } else {
        console.error('Error!');
    }
};

// request.onreadystatechange = function(){
//     if(this.readyState== 4 && this.status == 200){
//         console.log("A OK");
//     }
// }



// Object sent:
// SearchQuery = { 
//                  translation : English - Luganda,
//                  searchWord : Oli y otya
// }


