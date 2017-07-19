// 'use strict';

const express = require('express')
const router = express.Router()
const homes = require('../controllers/homes')
const users = require('../controllers/users')
const session = require('../controllers/session')
const { isLoggedIn, isAuthorized } = require('../../lib/auth')

router.get('/homepage', homes.getFeaturedHomes)
router.post('/users', users.create)
router.post('/sessions', session.create)
router.delete('/sessions', session.destroy)
router.get('/sessions/refresh', session.refresh)
router.get('/users/:id', isLoggedIn, isAuthorized, users.show)

module.exports = router;
