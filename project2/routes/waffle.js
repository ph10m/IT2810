var express = require('express');
var router = express.Router();

/* GET your page. */
router.get('/waffle', function(req, res, next) {
    res.render('waffle.html', { title: 'Vaffel' });
});

module.exports = router;