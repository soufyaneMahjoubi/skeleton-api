const express = require('express');
const router = express.Router();
const exempleController = require('../../../controller/exemple/v1');
const requestSchema = require('./resquestSchema');
const validator = require('../../../middleware/validator');

router.get('/', exempleController.getExemple);
router.post('/', validator(requestSchema.example), exempleController.postExemple);
module.exports = router;
