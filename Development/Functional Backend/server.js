const input = require('./inputProcessor');
const express = require('express');
var app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
// DOTJSMKAER IMPORT
const exporter = require('./modules/dotJSMaker');
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const storage = {
    access_token: null,
    token_expirey: null
};

//Get Key for Managment
function getAccessToken(done) {
    if (!storage.access_token || storage.token_expirey < Date.now() + 600000) {
        var options =
        {
            method: 'POST',
            url: 'https://shanerobbins.auth0.com/oauth/token',
            headers: { 'content-type': 'application/json' },
            body:
                    { grant_type: 'client_credentials',
                        client_id: 'Ulh5pCjultmdjddrRN3WygMBPfAGulQa',
                        client_secret: '2zt3YJnTJ89wQOU-7sL6ZzEl1oLNClvEvKYFdw1iWoC7y9m2EsmdBbxIBewS4N5F',
                        audience: 'https://shanerobbins.auth0.com/api/v2/' },
            json: true };
        request(options, function (error, response, body) {
            if (error) {
                console.log(error);
            }
            else {
                storage.access_token = body.access_token;
                storage.token_expirey = Date.now() + (body.expires_in * 1000);
                done({access_token: storage.access_token});
            }
        });
    }
    else {
        done({access_token: storage.access_token});
    }
}


//
// function getUserInfo(token) {
//
//     var options =
//     {
//         method: 'GET',
//         url: 'https://shanerobbins.auth0.com/api/v2/users/auth0|599b5b4985b13252e7f5362b',
//         headers:
//             {
//                 authorization: ('Bearer ' + token),
//                 'content-type': 'application/json'
//             }
//     };
//
//     request(options, function (error, response, body) {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log(body);
//         }
//     });
// }




//Authorization
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://shanerobbins.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'myjscookbook.com',
    issuer: 'https://shanerobbins.auth0.com/',
    algorithms: ['RS256']
});


//We need to update headers to be more secure
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
});

// Starts Up
app.listen(8080, function() {
    console.log('Server is running on port 8080! Fk Yea!');
});



// When Generate Command is Triggered
app.post('/generate', authCheck, (req, res, next) => {
    console.log("recieved!");
    let receivedObject = (req.body)
    let outputs = []

    for (key in receivedObject) {
        let t = input.inputProcessor(receivedObject[key]);
        outputs.push(t);
    }

    // Logs Final Output of All Functions
    console.log("Final Outputs Below");
    console.log(outputs);

    if (outputs.length > 0) {
        exporter.dotJSMaker(outputs, res);

    }
    else {
        console.log('ZOINKS');
        res.send("ZOINKS \n Got nothin back from DOTJSMaker")
    }

});

//Get User Info
app.get('/userInfo/:userID', authCheck, (req, res) => {
    getAccessToken((response) => {
        let options =
        {
            method: 'GET',
            url: 'https://shanerobbins.auth0.com/api/v2/users/' + req.params.userID,
            headers:
                {
                    authorization: ('Bearer ' + response.access_token),
                    'content-type': 'application/json'
                }
        };

        request(options, function (error, response, body) {
            if (error) {
                console.log(error);
            }
            else {
                res.send(body)
            }
        });


    });
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
