//const express = require('express');
const http = require('http');
const fs = require('fs');
const server  = http.createServer((req,res) =>{

res.setHeader('Content-Type', 'text/html ')
fs.readFile('./sample.html',(err,data)=>{
    if (err){
        res.end();
    }else{
        //res.write();
        res.end(data);
    }


})

});

server.listen(80,'localhost',() => {

})
