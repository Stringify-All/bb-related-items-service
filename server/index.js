const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;
const getApiData = require('./api-helper.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// Requests here



app.listen(PORT, () => {
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});