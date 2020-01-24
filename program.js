const express = require('express');
const process = require('process');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static('public'));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.use(express.static(process.argv[3]));

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

app.put('/message/:id', (req, res, next) => {
  const id = req.params.id;
  const str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  next();
  res.send(str)
});

app.get('/search', (req, res) => {
  const query = req.query;
  res.send(query);
});

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) throw err;
    const books = JSON.parse(data.toString());
    res.json(books);
  })
});

app.listen(PORT);