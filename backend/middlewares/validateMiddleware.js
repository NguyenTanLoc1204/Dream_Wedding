const { body, validationResult } = require('express-validator');

exports.validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Vui lòng nhập tên')
    .isLength({ min: 2, max: 100 }).withMessage('Tên từ 2-100 ký tự'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Vui lòng nhập email')
    .isEmail().withMessage('Email không hợp lệ')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty().withMessage('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]{10,11}$/).withMessage('Số điện thoại 10-11 số'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Vui lòng nhập lời chúc')
    .isLength({ min: 10, max: 500 }).withMessage('Lời chúc từ 10-500 ký tự'),

  // Check validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];
