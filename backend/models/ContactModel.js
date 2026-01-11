const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Vui lòng nhập tên'],
    trim: true,
    maxlength: [100, 'Tên không quá 100 ký tự']
  },
  email: {
    type: String,
    required: [true, 'Vui lòng nhập email'],
    match: [/^\S+@\S+\.\S+$/, 'Email không hợp lệ'],
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Vui lòng nhập số điện thoại'],
    match: [/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ']
  },
  message: {
    type: String,
    required: [true, 'Vui lòng nhập lời chúc'],
    maxlength: [500, 'Lời chúc không quá 500 ký tự']
  },
  status: {
    type: String,
    enum: ['pending', 'read'],
    default: 'pending'
  },
  isPublic: {
    type: Boolean,
    default: true // Hiển thị công khai trên trang Wishes
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for faster queries
contactSchema.index({ email: 1, createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);