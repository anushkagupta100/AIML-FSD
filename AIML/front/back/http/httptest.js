const http = require('http');
const fspromises = require('fs/promises');

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Fixed syntax

    if (req.method == 'GET' && req.url == '/about') {
        res.end("<h1>Hello World</h1>");
    } 
    else if (req.url == '/error') {
        const a = await fspromises.readFile("./home.html");
        res.end(a);
    } 
    else {
        const a = await fspromises.readFile("./home.html");
        res.end(a);
    }
});

const port = 3003;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
