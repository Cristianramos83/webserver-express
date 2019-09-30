const http = require('http');

//req request y res es igual as respuestas
http.createServer((req, res) => {

        res.writeHead(200, { 'content-type': 'application/json' });

        let salida = {
            nombre: 'Cristian',
            edad: 35,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');