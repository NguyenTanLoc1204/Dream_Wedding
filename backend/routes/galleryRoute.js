const express = require('express');
const router = express.Router();
const { 
  getAllGallery, 
  getGalleryByCategory 
} = require('../controllers/galleryController');

// @route   GET /api/gallery
// @desc    Get all gallery images
// @access  Public
router.get('/', getAllGallery);

// @route   GET /api/gallery/:category
// @desc    Get gallery by category
// @access  Public
router.get('/:category', getGalleryByCategory);

module.exports = router;