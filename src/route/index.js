const express = require('express');
const router = express.Router();
/* const routes = {
    '/v1': './v1',
};

Object.keys(routes).forEach(key => router.use(key, require(routes[key]))); // eslint-disable-line */

const example = require('./exemple/v1');

router.use('/v1/exemple', example);

module.exports = router;
