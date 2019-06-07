var express = require('express')
var app =  express();
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const {Client} = require('pg');
var connectionString = "postgres://postgres:keishamukasa@localhost:5432/dictionarydb"

const client = new Client({
    connectionString:connectionString
})

client.connect();

client.query("SELECT * FROM words", (err, res)=>{
    console.log(err, res);
    client.end();
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))