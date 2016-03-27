var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pet_store');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));

mongoose.model('Pet', new Schema({
    'name': String,
    'type': String,
    'age': Number,
    'img': String
}));

var Pet = mongoose.model('Pet');

app.get('/pets', function(req, res){
    Pet.find({}, function(err, data){
        if(err){
            console.log('err', err);
        }
        res.send('get data', data);
    });
});

app.post('/pets', function(req, res){
    console.log('body', req.body);

    var addedPet = new Pet({
        'name': req.body.name,
        'type': req.body.type,
        'age': req.body.age,
        'img': req.body.img
    });
    addedPet.save(function(err, data){
        if(err){
            console.log('err', err);
        }
        res.send(data);
    })
});

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});

module.exports = app;
