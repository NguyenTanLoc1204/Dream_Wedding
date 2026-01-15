const Contact = require('../models/ContactModel');
const emailService = require('../services/emailService');

// @desc    Submit contact form (wish)
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check duplicate email trong vòng 5p (tránh spam)
    const existingContact = await Contact.findOne({
      email,
      createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) }
    });

    if (existingContact) {
      return res.status(400).json({
        success: false,
        message: 'Bạn đã gửi lời chúc rồi. Vui lòng đợi 5p để gửi lại.'
      });
    }

    // Tạo contact mới
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    // Gửi email thông báo cho cô dâu/chú rể
    try {
      await emailService.sendWishNotification(contact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    // Gửi email cảm ơn cho khách
    try {
      await emailService.sendThankYouEmail(contact);
    } catch (emailError) {
      console.error('Thank you email failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Cảm ơn bạn đã gửi lời chúc! 💕',
      data: {
        id: contact._id,
        name: contact.name
      }
    });

  } catch (error) {
    next(error);
  }
};

// @desc    Get all contacts/wishes (for wishes page)
// @route   GET /api/contact
// @access  Public
exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ isPublic: true })
      .sort({ createdAt: -1 })
      .select('name email phone message createdAt')
      .lean();

    const stats = {
      total: contacts.length,
      today: contacts.filter(c => {
        const today = new Date();
        const contactDate = new Date(c.createdAt);
        return contactDate.toDateString() === today.toDateString();
      }).length
    };

    res.json({
      success: true,
      count: contacts.length,
      stats,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single contact by ID (optional - for admin)
// @route   GET /api/contact/:id
// @access  Private
exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lời chúc'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    next(error);
  }
};
