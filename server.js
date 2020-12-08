//requireing
const express = require('express');
const mongoose = require('mongoose');

//app config

const app = express();
const port = process.env.PORT || 8000
//middleware


// DB config
const connection_url = 'mongodb+srv://admin:7kRKsplLoa5X7JhB@cluster0.ibs7n.mongodb.net/messengerdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ????


// api routes

app.get('/', (req, res) => res.status(200).send('Hello world'))

// ;listener
app.listen(port, () => console.log(`listening on localhost:${port}`))