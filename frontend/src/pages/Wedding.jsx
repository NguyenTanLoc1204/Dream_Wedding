import './Wedding.css'

export default function Wedding() {
  const weddingInfo = {
    ceremony: {
      title: 'Lễ Cưới',
      date: '31/12/2025',
      time: '14:00',
      venue: 'Khách sạn Sofitel Saigon Plaza',
      address: '17 Lê Duẩn, Quận 1, TP. Hồ Chí Minh',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4956932043684!2d106.69745731533391!3d10.776889062180447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc1%3A0xb3ff69197b10ec4f!2sSofitel%20Saigon%20Plaza!5e0!3m2!1sen!2s!4v1234567890'
    },
    reception: {
      title: 'Tiệc Cưới',
      date: '31/12/2025',
      time: '18:00',
      venue: 'Khách sạn Sofitel Saigon Plaza',
      address: '17 Lê Duẩn, Quận 1, TP. Hồ Chí Minh'
    }
  }

  return (
    <div className="wedding-page">
      <section className="wedding-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">When & Where</p>
            <h2>Wedding Details</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="wedding-info-section section">
        <div className="container">
          <div className="wedding-cards">
            <div className="wedding-card">
              <div className="wedding-icon">💒</div>
              <h3>{weddingInfo.ceremony.title}</h3>
              <div className="wedding-details">
                <p><strong>📅 Ngày:</strong> {weddingInfo.ceremony.date}</p>
                <p><strong>🕐 Giờ:</strong> {weddingInfo.ceremony.time}</p>
                <p><strong>📍 Địa điểm:</strong> {weddingInfo.ceremony.venue}</p>
                <p>{weddingInfo.ceremony.address}</p>
              </div>
            </div>

            <div className="wedding-card">
              <div className="wedding-icon">🎉</div>
              <h3>{weddingInfo.reception.title}</h3>
              <div className="wedding-details">
                <p><strong>📅 Ngày:</strong> {weddingInfo.reception.date}</p>
                <p><strong>🕐 Giờ:</strong> {weddingInfo.reception.time}</p>
                <p><strong>📍 Địa điểm:</strong> {weddingInfo.reception.venue}</p>
                <p>{weddingInfo.reception.address}</p>
              </div>
            </div>
          </div>

          <div className="wedding-map">
            <h3>Bản đồ đường đi</h3>
            <div className="map-container">
              <iframe
                src={weddingInfo.ceremony.map}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}