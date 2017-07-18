// 'use strict';

const express = require('express')
const router = express.Router()
const homes = require('../controllers/homes')
const users = require('../controllers/users')
const session = require('../controllers/session')
// const isLoggedIn = require('../../lib/auth')

router.get('/homepage', homes.getFeaturedHomes)
router.post('/users', users.create)
router.post('/sessions', session.create)
router.delete('/sessions', session.destroy)

module.exports = router;
