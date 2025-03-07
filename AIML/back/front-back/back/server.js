const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());//builtin middleware

app.get("/api",async(req,res)=>{
    const apidata = await axios.get("https://dummyjson.com/products");
    res.send(apidata.data.products);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});