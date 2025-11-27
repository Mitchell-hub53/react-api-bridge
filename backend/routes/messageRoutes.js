const express = require('express');
const { createMessage } = require('../controllers/messageController');
const { validateMessage } = require('../middleware/validationMiddleware');

const router = express.Router();

router.route('/').post(validateMessage, createMessage);

module.exports = router;
