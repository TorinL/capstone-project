// 'use strict';

const express = require('express')
const router = express.Router()
const survey = require('../controllers/survey')
const homes = require('../controllers/homes')
const users = require('../controllers/users')
const session = require('../controllers/session')
const { isLoggedIn, isAuthorized } = require('../../lib/auth')

router.get('/homepage', homes.getFeaturedHomes)
router.post('/buyers_survey', survey.postSurvey)
router.post('/users', users.create)
router.post('/sessions', session.create)
router.post('/homes', homes.newHomes)
router.get('/homes', homes.getHomes)
router.delete('/sessions', session.destroy)
router.get('/sessions/refresh', session.refresh)
router.get('/users/:id', isLoggedIn, isAuthorized, users.show)

module.exports = router;
