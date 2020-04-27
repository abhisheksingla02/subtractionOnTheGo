const express = require('express');
const router = express.Router();
//const newrelic = require("newrelic");

const { subtractionEndpoint } = require('../controllers/subtraction')

//router.get('/flight/search/', flightSearch);
router.get('/subtraction',subtractionEndpoint)

module.exports = router;