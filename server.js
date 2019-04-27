const express = require('express');

var app = express();

const port = 3000 || process.env.port;


app.listen(port,()=>{
    console.log('Running on Port 3000')
})