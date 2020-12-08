//requireing
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./dbMessages')
//app config

const app = express();
const port = process.env.PORT || 8000
//middleware

app.use(bodyParser.json());
app.use(express.json());


// DB config
const connection_url = 'mongodb+srv://admin:7kRKsplLoa5X7JhB@cluster0.ibs7n.mongodb.net/messengerdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

// ????


// api routes

app.get('/', (req, res) => res.status(200).send('Hello world'));

app.get('/messages/sync', (req, res) => {
    Message.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Message.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// ;listener
app.listen(port, () => console.log(`listening on localhost:${port}`))