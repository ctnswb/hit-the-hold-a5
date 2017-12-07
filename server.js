var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var path = require('path');
//var db = require('./firebase-config.js');

var app = express();
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));
app.use('/*', express.static(path.resolve('dist/index.html')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

// app.get('/scores', function(req, res) {
//   var scores = [];
//   db.collection('scores').get()
//   .then((snapshot) => {
//     console.log(snapshot);
//     res.status(200).send(scores);
//   })
// })

// app.post('/scores', function(req, res) {
//   var climber = req.body.climber;
//   var time = req.body.time;
//   db.collection('scores').doc(climber).set({
//     'time' : time
//   })
//   .then(res.status(200).send('saved score'));
// })

var port = 4567;
app.listen(port);

console.log('Server now listening on port ' + port);