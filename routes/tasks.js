const express = require('express');
const router = express.Router();
// GET /tasks
const TaskModel = require('../models/TaskModel.js');
/* GET home page */
// /tasks/
// router.get('/tasks/')
router.get('/', (req, res, next) => {
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
// /tasks/
router.post('/', (req, res, next) => {
  var task = new TaskModel({
        text : req.body.text
  });

  task.save((err, task) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/tasks');
  });
});

module.exports = router;
