var ee = require('@google/earthengine');
// var privateKey = require('./privatekey.json');
require('dotenv').config();

const api_key = process.env.API_KEY;

// Initialize client library and run analysis.
var runAnalysis = function () {
    ee.initialize(null, null, function () {
        // ... run analysis ...
    }, function (e) {
        console.error('Initialization error: ' + e);
    });
};

// Authenticate using a service account.
ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
    console.error('Authentication error: ' + e);
});



document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
});



