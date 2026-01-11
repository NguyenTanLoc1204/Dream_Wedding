const nodemailer = require('nodemailer');
const { 
  getWishNotificationTemplate, 
  getThankYouTemplate 
} = require('../utils/emailTemplate');

const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Gửi email thông báo cho cô dâu/chú rể (wish notification)
exports.sendWishNotification = async (contact) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `💌 Lời chúc mới từ ${contact.name}`,
    html: getWishNotificationTemplate(contact)
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Wish notification sent:', info.messageId);
  return info;
};

// Gửi email cảm ơn cho khách
exports.sendThankYouEmail = async (contact) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: contact.email,
    subject: `Cảm ơn bạn, ${contact.name}! 💕`,
    html: getThankYouTemplate(contact)
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Thank you email sent to guest:', info.messageId);
  return info;
};
