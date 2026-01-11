import CoupleCard from '../components/cards/CoupleCard'
import './About.css'

export default function About() {
  const bride = {
    name: 'Cẩm Tú',
    role: 'The Bride',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500',
    description: 'Cô gái yêu thích sự giản dị, tận hưởng những điều nhỏ nhặt trong cuộc sống.',
    social: {
      facebook: '#',
      instagram: '#'
    }
  }

  const groom = {
    name: 'Hoàng Phương',
    role: 'The Groom',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
    description: 'Chàng trai yêu công nghệ, luôn nỗ lực mang đến điều tốt đẹp nhất cho người mình yêu.',
    social: {
      facebook: '#',
      instagram: '#'
    }
  }

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Get To Know Us</p>
            <h2>About The Happy Couple</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="couple-section section">
        <div className="container">
          <div className="couple-grid">
            <CoupleCard {...bride} />
            <div className="couple-heart">
              <span>💕</span>
            </div>
            <CoupleCard {...groom} />
          </div>
        </div>
      </section>

      <section className="love-quote section">
        <div className="container">
          <blockquote>
            "Tình yêu không phải là nhìn vào mắt nhau, 
            mà là cùng nhìn về một hướng."
            <footer>— Antoine de Saint-Exupéry</footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}