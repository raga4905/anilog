const express = require('express');
const router = express.Router();
const findingsCtrl = require('../controllers/findings');

router.post('/animals/:id/findings', findingsCtrl.create);
router.delete('/findings/:id', findingsCtrl.delete)

module.exports = router;