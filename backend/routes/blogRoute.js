const express = require('express');
const router = express.Router();
const { 
  getAllBlogs, 
  getBlogBySlug 
} = require('../controllers/blogController');

// @route   GET /api/blog
// @desc    Get all published blogs
// @access  Public
router.get('/', getAllBlogs);

// @route   GET /api/blog/:slug
// @desc    Get single blog by slug
// @access  Public
router.get('/:slug', getBlogBySlug);

module.exports = router;