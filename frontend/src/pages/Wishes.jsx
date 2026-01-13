import { useState, useEffect } from 'react'
import { contactService } from '../services/contactService'
import { formatDateTime } from '../utils/dateUtils'
import Loading from '../components/common/Loading'
import './Wishes.css'

export default function Wishes() {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    loadWishes()
  }, [])

  const loadWishes = async () => {
    try {
      setLoading(true)
      const response = await contactService.getAllContacts()
      setWishes(response.data || [])
    } catch (error) {
      console.error('Error loading wishes:', error)
    } finally {
      setLoading(false)
    }
  }

  const getFilteredWishes = () => {
    let filtered = [...wishes]
    
    switch(filter) {
      case 'recent':
        return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      default:
        return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  }

  const filteredWishes = getFilteredWishes()

  return (
    <div className="wishes-page">
      <section className="wishes-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Love & Blessings</p>
            <h2>Lời chúc từ mọi người</h2>
            <div className="divider"></div>
            <p className="wishes-count">
              💌 Đã nhận được <strong>{wishes.length}</strong> lời chúc
            </p>
          </div>
        </div>
      </section>

      <section className="wishes-list-section section">
        <div className="container">
          <div className="wishes-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tất cả
            </button>
            <button 
              className={`filter-btn ${filter === 'recent' ? 'active' : ''}`}
              onClick={() => setFilter('recent')}
            >
              Mới nhất
            </button>
            <button 
              className={`filter-btn ${filter === 'oldest' ? 'active' : ''}`}
              onClick={() => setFilter('oldest')}
            >
              Cũ nhất
            </button>
          </div>

          {loading ? (
            <Loading />
          ) : filteredWishes.length > 0 ? (
            <div className="wishes-grid">
              {filteredWishes.map((wish, index) => (
                <div 
                  key={wish._id} 
                  className="wish-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="wish-header">
                    <div className="wish-avatar">
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="wish-info">
                      <h3 className="wish-name">{wish.name}</h3>
                      <p className="wish-date">
                        📅 {formatDateTime(wish.createdAt)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="wish-content">
                    <div className="quote-icon">❝</div>
                    <p className="wish-message">{wish.message}</p>
                    <div className="quote-icon closing">❞</div>
                  </div>

                  <div className="wish-footer">
                    <div className="wish-contact">
                      <span>📧 {wish.email}</span>
                      <span>📱 {wish.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-wishes">
              <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc! 💕</p>
              <a href="/contact" className="btn btn-primary">
                Gửi lời chúc
              </a>
            </div>
          )}
        </div>
      </section>

      <a href="/contact" className="fab-btn" title="Gửi lời chúc">
        ✍️
      </a>
    </div>
  )
}
