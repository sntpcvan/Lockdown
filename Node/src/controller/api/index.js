var router = require('express').Router();

router.use('/notes', require('./notesController'));
router.use('/remainder', require('./remainderController'));

module.exports =router;