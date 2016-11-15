var express = require('express');
var router = express.Router();
// GET /list
var GroceryController = require('../controllers/GroceryController.js');

/* GET home page */
router.get('/', GroceryController.list);

/* GET return one grocery item from ID in url*/
router.get('/:id', GroceryController.show);

/* POST Create a new grocery item. */
router.post('/', GroceryController.create);

/* PUT update a single grocery item from id in url */
router.put('/:id', GroceryController.update);

/* DELETE delete a groceryItem from id in url */
router.delete('/:id', GroceryController.remove);


module.exports = router;
