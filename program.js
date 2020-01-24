const express = require('express');
const path = require('path');
const app = express();
const PORT = process.argv[2];

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.end('Hello World!')
});
app.listen(PORT);