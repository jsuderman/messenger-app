//requireing

const express = require('express');
const mongoose = require('mongoose');

//app config

const app = express();
const port = process.env.PORT || 8000
//middleware


// DB config



// ????


// api routes

app.get('/', (req, res) => res.status(200).send('Hello world'))

// ;listener
app.listen(port, () => console.log(`listening on localhost:${port}`))