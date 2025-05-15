const express = require('express');
const router = express.Router();
const {
  getProfile,
  getMyProfile,
  updateProfile
} = require('../controllers/profileController');
const auth = require('../middleware/auth');

router.get('/:id', getProfile);
router.get('/me', auth, getMyProfile);
router.put('/me', auth, updateProfile);

module.exports = router;
