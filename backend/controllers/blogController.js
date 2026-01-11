const Blog = require('../models/BlogModel');

// @desc    Get all published blogs
// @route   GET /api/blog
// @access  Public
exports.getAllBlogs = async (req, res, next) => {
  try {
    const { category, limit = 10, page = 1 } = req.query;

    const filter = { isPublished: true };
    if (category) {
      filter.category = category;
    }

    const skip = (page - 1) * limit;

    const blogs = await Blog.find(filter)
      .sort({ publishedAt: -1 })
      .limit(parseInt(limit))
      .skip(skip)
      .select('-content -__v -cloudinaryId');

    const total = await Blog.countDocuments(filter);

    res.json({
      success: true,
      count: blogs.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug
// @route   GET /api/blog/:slug
// @access  Public
exports.getBlogBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ 
      slug, 
      isPublished: true 
    }).select('-__v -cloudinaryId');

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy bài viết'
      });
    }

    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    next(error);
  }
};
