const express = require('express');
const router = express.Router();

const TaskModel = require('./models/TaskModel.js');
/* GET home page */
app.get('/', (req, res, next) => {
//mongoose find TaskModels
//mongoose will find all tasks - didn't pass a specific attribute
  TaskModel.find((err, tasks) => {
    //why 'index' instead of index.ejs?
    res.render('index.ejs', {
      tasks: tasks
    });
  });
});

/* POST Create a task. */
app.post('/tasks', (req, res, next) => {
  var task = new TaskModel({
        text : req.body.text
  });

  task.save((err, task) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/');
  });
});

module.exports = router;
