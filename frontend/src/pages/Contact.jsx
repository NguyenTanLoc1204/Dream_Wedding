import ContactForm from '../components/forms/ContactForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Get In Touch</p>
            <h2>Gửi lời chúc của bạn</h2>
            <div className="divider"></div>
            <p className="section-description">
              Hãy để lại những lời chúc phúc đẹp nhất cho chúng mình 💕
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h3>Thông tin liên hệ</h3>
                <div className="info-item">
                  <span className="icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>phuonggtuuu@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📱</span>
                  <div>
                    <h4>Điện thoại</h4>
                    <p>0375 987 029</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">📍</span>
                  <div>
                    <h4>Địa chỉ</h4>
                    <p>Khách sạn Sofitel Saigon Plaza<br/>17 Lê Duẩn, Q1, TP.HCM</p>
                  </div>
                </div>
              </div>

              {/* Link to Wishes Page */}
              <div className="wishes-link-box">
                <h4>💌 Xem lời chúc từ mọi người</h4>
                <p>Hàng trăm lời chúc đã được gửi đến chúng mình!</p>
                <a href="/wishes">
                  Xem tất cả lời chúc →
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}