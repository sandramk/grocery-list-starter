// Create your app
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task-list');



app.use(bodyParser.json());



const port = 3001;
app.listen(3001, () => console.info('listening'));
