
// Email gửi cho cô dâu/chú rể (Wish notification)
exports.getWishNotificationTemplate = (contact) => {
  const { name, email, phone, message } = contact;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { 
          background: linear-gradient(135deg, #d4af37, #8b7355); 
          color: white; 
          padding: 30px; 
          text-align: center; 
          border-radius: 10px 10px 0 0; 
        }
        .content { 
          background: #f9f9f9; 
          padding: 30px; 
          border-radius: 0 0 10px 10px; 
        }
        .wish-box {
          background: white;
          padding: 25px;
          border-left: 4px solid #d4af37;
          margin: 20px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .wish-message {
          font-size: 16px;
          font-style: italic;
          color: #555;
          line-height: 1.8;
          border-left: 3px solid #f5e6d3;
          padding-left: 15px;
        }
        .info-row { 
          margin: 12px 0; 
          padding: 8px; 
          background: white;
        }
        .label { 
          font-weight: bold; 
          color: #8b7355; 
          margin-right: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💌 Lời chúc mới</h1>
          <p style="margin-top: 10px; font-size: 18px;">Từ ${name}</p>
        </div>
        <div class="content">
          <div class="info-row">
            <span class="label">👤 Tên:</span> ${name}
          </div>
          <div class="info-row">
            <span class="label">📧 Email:</span> ${email}
          </div>
          <div class="info-row">
            <span class="label">📱 Số điện thoại:</span> ${phone}
          </div>
          
          <div class="wish-box">
            <h3 style="color: #d4af37; margin-bottom: 15px;">💕 Lời chúc:</h3>
            <div class="wish-message">
              "${message}"
            </div>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
            Gửi lúc: ${new Date(contact.createdAt).toLocaleString('vi-VN')}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email gửi cho khách (Thank you)
exports.getThankYouTemplate = (contact) => {
  const { name } = contact;
  const weddingDate = process.env.WEDDING_DATE || '31/12/2025';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Georgia', serif; line-height: 1.8; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 0; }
        .header { 
          background: linear-gradient(135deg, #d4af37, #8b7355); 
          color: white; 
          padding: 50px 30px; 
          text-align: center; 
        }
        .header h1 { 
          margin: 0; 
          font-size: 32px; 
          font-family: 'Great Vibes', cursive; 
        }
        .content { 
          background: white; 
          padding: 40px 30px; 
          text-align: center; 
        }
        .message { 
          font-size: 18px; 
          margin: 20px 0; 
        }
        .footer { 
          background: #f9f9f9; 
          padding: 20px; 
          text-align: center; 
          font-size: 14px; 
          color: #666; 
        }
        .heart { 
          color: #d4af37; 
          font-size: 24px; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Chi & Be</h1>
          <p style="margin-top: 10px; font-size: 18px;">💕 Wedding 2025 💕</p>
        </div>
        <div class="content">
          <h2>Xin chào ${name}!</h2>
          
          <p class="message">
            Cảm ơn bạn đã gửi lời chúc đến chúng mình! 🎉
          </p>
          <p>
            Chúng mình rất vui và xúc động khi nhận được những lời chúc phúc từ bạn.
            Sự quan tâm của bạn thật sự có ý nghĩa với chúng mình! 💕
          </p>
          <p>
            Lời chúc của bạn sẽ được hiển thị công khai trên website để mọi người cùng xem.
          </p>
          
          <div style="margin: 30px 0;">
            <span class="heart">❤️</span>
            <span class="heart">💛</span>
            <span class="heart">💚</span>
          </div>
          
          <p style="font-style: italic; color: #666; margin-top: 30px;">
            Trân trọng,<br>
            <strong>Chi & Be</strong>
          </p>

          <p style="margin-top: 30px;">
            <a href="${process.env.FRONTEND_URL}/wishes" 
               style="display: inline-block; padding: 12px 30px; background: #d4af37; 
                      color: white; text-decoration: none; border-radius: 25px; 
                      font-weight: 600;">
              Xem tất cả lời chúc
            </a>
          </p>
        </div>
        <div class="footer">
          <p>Đây là email tự động, vui lòng không reply.</p>
          <p>Nếu có thắc mắc, liên hệ: ${process.env.EMAIL_USER}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};