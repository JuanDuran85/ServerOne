let http = require('http');

let server = http.createServer(function () {
    console.log("Inicio de Servidor");
});

server.listen(3000);
console.log("Ejecutando servidor NodeJs");