var express = require('express');
var router = express.Router();
const animalsCtrl = require('../controllers/animals.js')



router.get('/', isLoggedIn, animalsCtrl.index)
router.get('/new', isLoggedIn, animalsCtrl.new);
router.get('/:id', isLoggedIn, animalsCtrl.show)
router.post('/', isLoggedIn, animalsCtrl.create);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth/google')
    }
}


module.exports = router;

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.render('animals/index', { title: 'Anilog', user: req.user });
// });