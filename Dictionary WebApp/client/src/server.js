// server.js
// Last Updated: 11/8/19
// server-side implementation

var express = require('express')
//var http = require('http');
var app =  express();
//var cors = require('cors');
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));

//app.use(cors());

// Setiting up Pug
app.set('views', path.join(__dirname));
app.set('view engine', 'pug');

// Postgres Connections
// const {Client} = require('pg');
// var connectionString = 

// const client = new Client({
//     connectionString:connectionString
// })

// client.connect();


// render main page index
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.get('/definitions', function(req, res){

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-Width")
    
    console.log('rendering file')
    res.render('definitions')

    

    // if(request.query.translation == "Luganda - English"){

    //     returnObj = {}
    //     returnObj["englishWord"] = "Hello"
    //     returnObj["lugandaWord"] = "Oli y otya"
    //     returnObj["lugandaTranslation"] = ""
    //     returnObj["englishTRanslation"] = "How're you?- a cordial form of greeting"

    //     console.log(returnObj)

    //     response.render('definitions');
    //     // client.query("SELECT english_word, english_translation FROM words WHERE luganda_word = " + request.query.searchQuery, (err, res)=>{
    //     //         console.log(res)
    //     //         response.send('RECEIVED')
    //     //      })
    // }
    // else{

    //     returnObj = {}
    //     returnObj["englishWord"] = "Hello"
    //     returnObj["lugandaWord"] = "Oli y otya"
    //     returnObj["lugandaTranslation"] = ""
    //     returnObj["englishTRanslation"] = "How're you?- a cordial form of greeting"


    //     response.render('definitions')

        // client.query("SELECT english_word, english_translation FROM words WHERE luganda_word = " + request.query.searchQuery, (err, res)=>{
        //     console.log("PG BABY")
        //     console.log(res)
        //     response.send('RECEIVED')
        // })
    //}
    

    // client.end()
});

app.get('/hello', function(req, res){
    res.render('definitions')
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


// definitions JSON object
// definitions{
// 
//          englishWord
//          LugandaWord
//          translation
//          englishTranslation
//          lugandaTranslation
//          
// }