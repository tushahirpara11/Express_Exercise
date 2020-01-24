const express = require('express');
const app = express();
const PORT = process.argv[2];

app.get('/', function (req, res) {
  res.end('Hello World!')
});
app.listen(PORT);