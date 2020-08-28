var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('animals/index', { title: 'Anilog', user: req.user });
});

module.exports = router;

