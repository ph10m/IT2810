var express = require('express');
var router = express.Router();

/* GET your page. */
router.get('/candy', function(req, res, next) {
    res.render('candy', { title: 'Godteri' });
});

module.exports = router;