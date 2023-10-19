const { createServer } = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Ola, Mundo!');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Servidor executando em http://${hostname}:${port} 🚀`);
});