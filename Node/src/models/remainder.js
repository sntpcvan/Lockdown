var mongo = require('mongoose');

var remainderSchema = new mongo.Schema({
name:{type:String, index:true},
test:Number
});

 var rem = mongo.model('remainderDTO', remainderSchema);

 module.exports = rem;