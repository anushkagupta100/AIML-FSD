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
app.patch("/api/updateUser/:id",(req,res)=>{
    const { id } = req.params;
    const{ name } = req.body;
    const index = users.findIndex(user => user.id==id);
    users[index].name=name;
    res.send("user is updated successfully");
});
app.delete("/api/deleteuser/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.findIndex(user => user.id==id);
    users.splice(user,1);
    res.send("user is updated successfully");
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});