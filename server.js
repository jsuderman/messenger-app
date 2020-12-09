//requireing
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./dbMessages');
const Pusher = require("pusher");
//app config

const app = express();
const port = process.env.PORT || 8000

const pusher = new Pusher({
    appId: "1120195",
    key: "e49696d1456791ae2abf",
    secret: "b350200996068da949af",
    cluster: "us3",
    useTLS: true
});
  
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

const db = mongoose.connection

db.once('open', () => {
    console.log("DB connected");

    const msgCollection = db.collection('messages');
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log(change);
    })
})


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