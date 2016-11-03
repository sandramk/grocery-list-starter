
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//instantiate a Schema object and pass object with field
const taskSchema = new Schema({
    'text' : {
      type: String,
      required: true
    }
});

//export model so require in other parts of app
module.exports = mongoose.model('Task', taskSchema);
