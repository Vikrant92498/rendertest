const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1>Hello myself Vikrant . Who are you ?</h1>`)
})



app.listen(3000,()=>{
    console.log("Server is running");
})