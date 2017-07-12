const express = require('express');
const router = express.Router();

router.post('/users', (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
