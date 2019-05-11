let http = require('http');

let server = http.createServer( function (require,resolve) {
    resolve.writeHead(200,{'Content-type':'text/html'}); //escribe en el encabezado del documento cuando la respuesta es 200
    resolve.write(`Respuesta correcta para la direccion: ${require.url}`); //escribe la cadena de texto dentro de la respuesta del servidor
    console.log("Inicio de Servidor");
});

server.listen(3000);
console.log("Ejecutando servidor NodeJs");