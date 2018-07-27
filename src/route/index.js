const express = require('express');
const router = express.Router();
const example = require('./exemple/v1');

router.use('/v1/exemple', example);

module.exports = router;
