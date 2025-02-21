// import express from 'express';
//localhost:3000/api?name=rajesh&rollno=22003215(url)
const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("Welcome to Express")
});
app.get('/api/:name/:rollno',(req,res)=>{
    try{
        const {name,rollno} = req.params;
        res.send(`Welcome ${name} and your rollno is ${rollno}`);     //http://localhost:3000/api/anushka/2342
    }catch(error){
        console.log(`Error: ${error.message}`);
    }
})
app.get('/api',(req,res)=>{
    //const {name="Guest",rollno=100} = req.query; 
   try{
    const {name,rollno} = req.query;
    if(!name){
        return res.status(400).send("Name is required");
    }
    else{
        res.send(`Welcome to ABES: ${name} and Roll no. is ${rollno}`)
    }
   }catch(error){
    console.log(`Error: ${error.message}`);
   }
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});