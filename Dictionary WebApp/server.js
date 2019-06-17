var express = require('express')
var app =  express();
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const {Client} = require('pg');
var connectionString = "postgres://postgres:keishamukasa@localhost:5432/dictionarydb"

const client = new Client({
    connectionString:connectionString
})

client.connect();

app.get('/definitions', function(request, response){

    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Headers", "X-Requested-Width")

    client.query("SELECT * FROM words", (err, res)=>{
        // console.log(err, res)
        result = {};
        console.log(res.rows)
        client.end()
        // res.render("definitions", rows)
    })
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))