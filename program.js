const express = require('express');
const path = require('path');
const app = express();

const port = process.argv[2];

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.end("Hello World!");
});

app.set('views', process.argv[3]);
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(port);
