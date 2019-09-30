const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//Midlewer

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    //el home es pagina.hbs 
    res.render('home', {
        nombre: 'cristian ramos'
    });
});
app.get('/about', function(req, res) {

    res.render('about');
});


/* app.get('/data', function(req, res) {
    res.send('Hola Data');
}) */

//el listen recibe un puerto y un callback
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});