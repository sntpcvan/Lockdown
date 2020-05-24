var routes = require('express').Router();
var notesBusiness = require('../../services/notes');

routes.get('/', async function (req, res) {
    try {
        result = await notesBusiness.getAllNotes();
        res.send(result);
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
});

routes.post('/', async function (req, res) {
    try {
        result = await notesBusiness.saveNote(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
});

routes.get('/id:id', async function (req, res) {
    try {
        console.log("SNAEEP WRONG ")
        result = await notesBusiness.getNotes(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
    res.send(test);
});

routes.get('/search', async function (req, res) {
    try {
        console.log("SNAEEP DSIVNAS ")
        let mainContentKey = req.query.content;
        console.log(mainContentKey);
        result = await notesBusiness.searchNote(mainContentKey);
        res.send(result);
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
});

module.exports = routes;