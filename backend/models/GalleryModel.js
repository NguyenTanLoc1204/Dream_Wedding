const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String, // Lưu public_id để có thể xóa sau
  },
  category: {
    type: String,
    enum: ['pre-wedding', 'engagement', 'ceremony', 'reception', 'honeymoon', 'other'],
    default: 'other'
  },
  description: {
    type: String,
    maxlength: 300
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

gallerySchema.index({ category: 1, order: 1 });

module.exports = mongoose.model('Gallery', gallerySchema);