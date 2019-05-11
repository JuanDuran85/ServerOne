let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer( function (require,resolve) {
    let ruta = url.parse(require.url).pathname;
    resolve.writeHead(200,{'Content-type':'text/html'}); //escribe en el encabezado del documento cuando la respuesta es 200
    resolve.write(`Respuesta correcta para la direccion: ${ruta}`); //escribe la cadena de texto dentro de la respuesta del servidor
    console.log("Inicio de Servidor");
    let register = fs.createWriteStream('registro.txt',{'flags':'a'});
    register.write(`${ruta} \n`);
    resolve.end();
});

server.listen(3000);
console.log("Ejecutando servidor NodeJs");