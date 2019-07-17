var router = require('express').Router();



var api_version = 1;
router.use(`/api/${api_version}`, require('./api'));

module.exports = router;