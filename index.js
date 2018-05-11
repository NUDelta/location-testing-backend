const express = require('expresss');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log('Location Backend live on ' + port);
})