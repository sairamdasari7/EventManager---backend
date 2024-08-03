const express = require('express');
const { getSessions } = require('../controllers/sessionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET api/sessions
// @desc    Get all sessions for the logged-in user
// @access  Private
router.get('/sessions', auth, getSessions);

module.exports = router;
