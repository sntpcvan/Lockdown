var mongoose = require('mongoose');

function connectDataBase() {
    console.log('Begin Connecting DB .... ');
    mongoose.connect('mongodb://sntpcvan:sntpcvan@cluster0-shard-00-00-aqnqx.mongodb.net:27017,cluster0-shard-00-01-aqnqx.mongodb.net:27017,cluster0-shard-00-02-aqnqx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

    // get reference to database
    var db = mongoose.connection;
    db.on('connected', () => console.log('Connected'));
    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log("CONNECTED MONGOO")
    });
    console.log('End Connecting DB .... ');
}

module.exports = {
    connectDataBase: connectDataBase
}
