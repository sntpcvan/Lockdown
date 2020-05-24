var mongo = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

var notesSchema = new mongo.Schema({
    //id: String,
    createdOn: { type: Date, default: Date.now() },
    lastModified: Date,
    mainContent: [
        {
            // id: mongo.Schema.Types.ObjectId,
            data: String,
            attribute: String
        }
    ],
    userId: String,
    tags: [
        {
            name: String,
            code: String,
            remainder: String
        }
    ]
});
// notesSchema.plugin(uniqueValidator);

var model = mongo.model('notenodejs', notesSchema);

module.exports = {
    notesModel: model
};