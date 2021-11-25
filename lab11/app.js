const express = require('express');
const app = express();
const path = require('path');
const static = express.static(__dirname + '/public');
app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.sendFile(path.resolve('static/index.html'));
});


app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});