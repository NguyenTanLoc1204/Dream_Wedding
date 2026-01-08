const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (toEmail, subject, htmlContent) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Security Team" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: subject,
        html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
};

const sendWeeklyReport = async (toEmail, reportData) => {
    const subject = `[Báo Cáo Tuần] (${reportData.startDate} - ${reportData.endDate})`;
    
    const format = (num) => num ? Number(num).toFixed(1) : 0;

    const htmlContent = `
        <h3>BÁO CÁO HOẠT ĐỘNG TUẦN</h3>
        <p>Thời gian: ${reportData.startDate} đến ${reportData.endDate}</p>
        <hr>
        
        <h4>1. Nhiệt độ (°C)</h4>
        <ul>
            <li>Trung bình: <b>${format(reportData.avgTemp)}</b></li>
            <li>Cao nhất: <b>${format(reportData.maxTemp)}</b></li>
            <li>Thấp nhất: <b>${format(reportData.minTemp)}</b></li>
        </ul>

        <h4>2. Độ ẩm không khí (%)</h4>
        <ul>
            <li>Trung bình: <b>${format(reportData.avgHum)}</b></li>
            <li>Cao nhất: <b>${format(reportData.maxHum)}</b></li>
            <li>Thấp nhất: <b>${format(reportData.minHum)}</b></li>
        </ul>

        <h4>3. Độ ẩm đất (%)</h4>
        <ul>
            <li>Trung bình: <b>${format(reportData.avgSoil)}</b></li>
            <li>Cao nhất: <b>${format(reportData.maxSoil)}</b></li>
            <li>Thấp nhất: <b>${format(reportData.minSoil)}</b></li>
        </ul>

        <h4>4. Tiêu thụ năng lượng</h4>
        <ul>
            <li>Tổng thời gian bơm: <b>${reportData.totalPumpMinutes} phút</b></li>
            <li>Điện năng tiêu thụ: <b>${format(reportData.totalConsumption)} Wh</b></li>
        </ul>
        
        <hr>
        <p style="font-size: 12px; color: #666;">Báo cáo tự động từ hệ thống PlantCare.</p>
    `;

    await sendEmail(toEmail, subject, htmlContent);
};

module.exports = { 
    sendEmail,
    sendWeeklyReport
};