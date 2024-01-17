// import dependencies needed

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

// creating the server

const app = express();
const port = process.env.SERVER_PORT;

// encode characters correctly if needed when requesting JSON data

app.use(bodyParser.urlencoded({extended: true}));

// configure engine view (EJS) and where the views are stored

app.set('view engine', 'ejs');
app.set('views', './views');

// configure root directory

app.use(express.static(__dirname + '/public'));

// open server to listen to requests

app.listen(port, () => {
    console.log('Listening on port:', port);
})

// render index (main page)

app.get('/', (req, res) => {
    res.render('index')
})

// page not found

app.use((req, res) => {
    res.status(404).send('Page not found');
})
