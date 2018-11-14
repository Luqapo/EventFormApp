const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const Event = require('./models/Event');

const uri = 'mongodb://Luq:Haslo1@cluster0-shard-00-00-gw1sh.mongodb.net:27017,cluster0-shard-00-01-gw1sh.mongodb.net:27017,cluster0-shard-00-02-gw1sh.mongodb.net:27017/JuraDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(uri, {useNewUrlParser: true}, () => {
    console.log('Connected to Databse');   
});

const app = express();
const PORT = 5000;
const router = express.Router();
app.use('/api', router);
app.use(express.static(path.join(__dirname, 'build')));
router.use(bodyParser.json());

router.route('/register')
    .post((req,res) => {
        Event.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            date: req.body.date
        }, (err,event) => {
            if(err) res.status(500).send({ message: 'There was problem registering the user.' });
            res.status(200).send({ message: 'Event added' });
        })
    })

app.listen( PORT, () => {
    console.log(`Server listen at ${PORT}`)
})