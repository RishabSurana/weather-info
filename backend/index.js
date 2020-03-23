var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');
// Body Parser Middleware
app.use(bodyParser.json({limit: '50mb'}));

app.use(cors());


const weather = require('./weather/weathers');
app.use('/weather', weather);


app.get('/', (req, res) => {
    res.send('Cannot Serve this request');
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});