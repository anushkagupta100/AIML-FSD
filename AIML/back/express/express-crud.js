//crud=post,get,patch put,delete
const express = require('express');
const users = [{
    id:1,
    name:'Anushka',
    email:'anushka@abes.ac.in'
}]

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("Welcome to my API");
});

app.get("/getusers",(req,res)=>{
    res.send(users);
});

app.get("/api",(req,res)=>{
    res.send("Welcome to my new API");
});

app.use(express.json());//built in middleware
app.post("/api/users",(req,res)=>{
    const bodydata = req.body;
    console.log(bodydata)
    res.send("Data recieved successfully");
});
app.post("/api/createuser",(req,res)=>{
    const {name,email} = req.body;
    const newid = users.length>0?users[users.length-1].id+1 : 1;
    users.push({id:newid,name,email});
    res.status(201).send("User created successfully");
});

app.get("/getusers/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find(user => user.id==id);
    res.send(user);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
