// Create your app
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list');

const listRoutes = require('./routes/list');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/list', listRoutes);


const port = 3001;
app.listen(3001, () => console.info('listening'));
