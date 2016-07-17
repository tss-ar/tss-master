'use strict';

// const config = require('./conf.json');
const express = require('express');
var app = express();

app.post('/keepalive/:name/:ip', function (req, res) {
    // var ip = req.headers['x-forwarded-for'] || 
    //  req.connection.remoteAddress || 
    //  req.socket.remoteAddress ||
    //  req.connection.socket.remoteAddress;
    
    console.log(`${new Date()} - ${req.params.name}: ${req.params.ip}`);
        // console.log('\n\n');

   res.sendStatus(200);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});