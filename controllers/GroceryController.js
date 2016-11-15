var GroceryModel = require ('../models/GroceryModel.js');

module.exports = {
  list: function (req, res) {
    GroceryModel.find(function (err, groceries) {
      return res.json(groceries);
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    GroceryModel.findOne({_id: id}, function (err, groceryItem) {
      return res.json(groceries);
    });
  },

  create: function (req, res) {
    var groceryItem = new GroceryModel ({
      text : req.body.text
    });

    groceryItem.save(function (err, groceryItem) {
      return res.json(groceryItem);
    });
  },

  update: function (req, res) {
    var id = req.params.id;
    GroceryModel.findOne({_id: id}, function (err, groceryItem) {
      groceryItem.text = req.body.text;

      groceryItem.save(function (err, groceryItem) {
        return res.json(groceryItem);
      });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;
    GroceryModel.findByIdAndRemove(id, function (err, groceryItem) {
      return res.json(groceryItem);
    });
  }
};
