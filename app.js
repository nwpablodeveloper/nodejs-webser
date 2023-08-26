require('dotenv').config()
const express = require('express');
const app = express();
const hbs = require('hbs');
require('colors');

const port = process.env.PORT ;


app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


app.use( express.static('public') );


app.get('/', function (req, res) {
    res.render('home', { 
        nombre: 'Pablo Veiga',
        titulo: 'Curso de Node'
     });
});


app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'Pablo Veiga',
        titulo: 'Curso node'
    });
    });

app.get('/elements', function (req, res) {
    res.render( 'elements', {
        nombre: 'Pablo Veiga',
        titulo: 'Curso Node'
    });
});

app.get('/*', function (req, res) {
  res.sendFile( __dirname + '/public/page-not-found.html');
});


app.listen( port, () => {
    console.log( `CORRIENDO EN: http://localhost:${ port }`.yellow );
});