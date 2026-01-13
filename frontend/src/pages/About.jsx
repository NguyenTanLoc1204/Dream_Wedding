import CoupleCard from '../components/cards/CoupleCard'
import './About.css'

export default function About() {
  const bride = {
    name: 'Cẩm Tú',
    role: 'The Bride',
    image: '/images/couple/bride.jpeg',
    description: 'Cô gái yêu thích sự giản dị, tận hưởng những điều nhỏ nhặt trong cuộc sống.',
    social: {
      facebook: '#',
      instagram: '#'
    }
  }

  const groom = {
    name: 'Hoàng Phương',
    role: 'The Groom',
    image: '/images/couple/groom.jpeg',
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
            <CoupleCard {...groom} />
            <div className="couple-heart">
              <span>💕</span>
            </div>
            <CoupleCard {...bride} />
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