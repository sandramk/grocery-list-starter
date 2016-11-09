const express = require('express');
const router = express.Router();
// GET /list
const GroceryModel = require('../models/GroceryModel.js');
/* GET home page */
// /list/
// router.get('/list/')
router.get('/', (req, res, next) => {
//mongoose find GroceryModels
//mongoose will find all list - didn't pass a specific attribute
  GroceryModel.find((err, groceries) => {
    res.render('index.ejs', {
      groceriesRendered: groceries
    });
  });
});

/* POST Create a saveList. */
// /list/
router.post('/', (req, res, next) => {
  var saveList = new GroceryModel({
        text : req.body.text,
        quantity : req.body.quantity
  });

  saveList.save((err, saveList) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when the insert is finished
    res.redirect('/list');
  });
});

module.exports = router;
