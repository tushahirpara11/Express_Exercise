const express = require('express');
const process = require('process');

const app = express();
const PORT = process.argv[2];

app.set('views', process.argv[3])
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.end('Hello World!')
});

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});

app.post('/form', (req, res) => {
  console.log(req.body);
  res.send(req.body.str.split('').reverse().join(''))
});

app.listen(PORT);