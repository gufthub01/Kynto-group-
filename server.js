const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Kynto AI Server is running!");
});

server.listen(3000, () => {
    console.log("Kynto AI server running on port 3000");
});