// 'use strict';

const express = require('express')
const router = express.Router()
const homes = require('../controllers/homes')
const users = require('../controllers/users')


router.get('/homepage', homes.getFeaturedHomes)
router.post('/users', users.create)

module.exports = router;
