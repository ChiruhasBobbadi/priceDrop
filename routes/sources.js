const express = require('express');
const router = express.Router();
const scrapeController=require('../controller/scrapeController');

router.post('/amazon',scrapeController.amazonList);

router.post('/flipkart',scrapeController.flipkartList);

router.post('/myntra',scrapeController.myntraList);

module.exports = router;