const input = require('./inputProcessor');
const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//We need to update headers to be more secure
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
});


app.listen(8080, function() {
    console.log('Server is running!');
});

app.post('/generate', (req, res) => {
    let receivedObject = (req.body)
    for (prop in receivedObject) {
        
    }
    console.log(h);
    res.send('Received!');
});

// let serverInput = [{
//     functionType : process.argv[2],
//     functionSubType : process.argv[3],
//     triggerType: process.argv[4],
//     triggerID: process.argv[5],
//     targetID: process.argv[6],
//     generalParam: process.argv[7],
//     generalParamTwo: process.argv[8],
//     triggerParam: process.argv[9],
//     triggerParamTwo: process.argv[10]}];

// input.inputProcessor(serverInput);
