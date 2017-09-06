var express = require('express');
var router = express.Router();

/* GET your page. */
router.get('/cookie', function(req, res, next) {
    res.render('cookie', { title: 'Title here' });
});

module.exports = router;