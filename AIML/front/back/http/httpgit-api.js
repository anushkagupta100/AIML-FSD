const http = require('http');
const axios = require('axios');
const port = 3002;

const server = http.createServer(async (req, res) => {
    console.log("Fetching GitHub users...");
    res.writeHead(200, { "Content-Type": "text/html" });

    
        const response = await axios.get("https://api.github.com/search/users?q=location:ghaziabad&per_page=100");
        const users = response.data.items;
        
        let frontdata = `<html><head></head><body>`;
        users.forEach((user) => {
            frontdata += `<div><img src="${user.avatar_url}" </div>`;
        });
        frontdata += `</body></html>`;
        
        res.end(frontdata);
    
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});