const express = require('express');
const router = express.Router();
const findingsCtrl = require('../controllers/findings');

router.post('/animals/:id/findings', findingsCtrl.create);


module.exports = router;