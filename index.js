const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 5000;
app.listen('/', (req,res)=>{

   console.log(`server is listening on ${PORT}`)
})


