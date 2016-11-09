
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//instantiate a Schema object and pass object with field
const grocerySchema = new Schema({
    'text' : String,
    'quantity' : Number
});

//export model to require in other parts of app
module.exports = mongoose.model('GroceryCollection', grocerySchema);
