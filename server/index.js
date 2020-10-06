const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9001;
// const getApiData = require('./api-helper.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client/dist'));

// Requests here

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Welcome to the Dangerzone Scrumdog. Server is running on PORT: ${PORT}`);
});
