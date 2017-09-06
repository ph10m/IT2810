var express = require('express');
var router = express.Router();

/* GET your page. */
router.get('/cake', function(req, res, next) {
    res.render('cake', { title: 'Kaker' });
});

module.exports = router;