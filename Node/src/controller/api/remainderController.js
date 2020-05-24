var router = require('express').Router();
var mongo = require('mongoose');
var rem = require('../../models/remainder');
var mongoose = require('mongoose');



router.get('/', async function (req, res) {
    // var data = new RemainderModel({name:'sandeep', test:1188});
    // // data.save().then(s=>{
    // //     console.log(s);
    // // }).catch
    // // (ee=>{
    // //     console.log('ERROR'+ee);
    // // })

    // data.save(function(err) {
    //     if (err) throw err;

    //     console.log('User saved successfully!');
    //   } );



    // mongoose.connect('mongodb://sntpcvan:sntpcvan@cluster0-shard-00-00-aqnqx.mongodb.net:27017,cluster0-shard-00-01-aqnqx.mongodb.net:27017,cluster0-shard-00-02-aqnqx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true });
    // var MyModel = mongoose.model('TestIng', new mongoose.Schema({
    //     name: {
    //         type: String,
    //         index: true
    //     }
    // }));
    // var data = new MyModel({ name: 'sjand' });
    // data.save(
    //     function (err) {
    //         if (err) throw err;

    //         console.log('User saved successfully!');
    //     }
    // );
    var data = new rem({name:'sandeep', test:1188});
    data.markModified('remainderDTO')
    await data.save();
    res.send('I am at Remainder place')
});

router.get('/remainder', function (req, res) {
    res.send('I am at Remainder place')
});

module.exports = router;