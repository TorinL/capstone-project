// 'use strict';

const express = require('express')
const router = express.Router()
const homes = require('../controllers/homes')

console.log('IN ROUTES');

router.get('/homepage', homes.getFeaturedHomes)

module.exports = router;
