const express = require('express');
const { loadData, getAllRecords } = require('../controllers/recordController');
const router = express.Router();

router.get('/load-data', loadData);
router.get('/', getAllRecords);

module.exports = router;