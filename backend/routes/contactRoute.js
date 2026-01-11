const express = require('express');
const router = express.Router();
const { 
  submitContact, 
  getAllContacts,
  getContactById
} = require('../controllers/contactController');
const { validateContact } = require('../middlewares/validateMiddleware');

// @route   POST /api/contact
// @desc    Submit contact form (wish)
// @access  Public
router.post('/', validateContact, submitContact);

// @route   GET /api/contact
// @desc    Get all contacts/wishes
// @access  Public
router.get('/', getAllContacts);

// @route   GET /api/contact/:id
// @desc    Get single contact (optional)
// @access  Public
router.get('/:id', getContactById);

module.exports = router;