const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsControllers');

router.get('/:slug', newsController.index);

router.get('/', newsController.index);

module.exports = router;
