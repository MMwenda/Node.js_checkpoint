// console.log("HELLO WORLD");
const http = require('http');
const fs = require('fs');
const PORT1 = 3000;	
const PORT2 = 3100;

console.log("HELLO WORLD"); // this prints "HELLO WORLD" to the console


const server1 = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // this sets the response header and ensures that the response is in html
    res.end('<h1>Hello Node!!!</h1>');  // this sends a response to the client
})

const server2 = http.createServer((req, res) =>{
    fs.readFile('welcome.txt', 'utf8', (err, data) => { // this reads the content of the file 'welcome.txt'
        if(err){
            res.writeHead(404);
            res.write('File not found!');
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); // this sends the content of the file 'welcome.txt' to the client
        }
        res.end();
    });
})

server1.listen(PORT1, () => {
    console.log(`Server running at http://localhost:${PORT1}/`);
})

server2.listen(PORT2, () => {
    console.log(`Server running at http://localhost:${PORT2}/`);
})
