const express = require('express');
const smsRoutes = require('./smsRoutes');

const router = express.Router();

router.use('/sms', smsRoutes);

module.exports = router;
