const Gallery = require('../models/GalleryModel');

// @desc    Get all gallery images
// @route   GET /api/gallery
// @access  Public
exports.getAllGallery = async (req, res, next) => {
  try {
    const { category } = req.query;
    
    const filter = { isActive: true };
    if (category && category !== 'all') {
      filter.category = category;
    }

    const images = await Gallery.find(filter)
      .sort({ order: 1, createdAt: -1 })
      .select('-__v -cloudinaryId');

    res.json({
      success: true,
      count: images.length,
      data: images
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get gallery by category
// @route   GET /api/gallery/:category
// @access  Public
exports.getGalleryByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;

    const images = await Gallery.find({ 
      category, 
      isActive: true 
    })
    .sort({ order: 1, createdAt: -1 })
    .select('-__v -cloudinaryId');

    res.json({
      success: true,
      count: images.length,
      category,
      data: images
    });
  } catch (error) {
    next(error);
  }
};
