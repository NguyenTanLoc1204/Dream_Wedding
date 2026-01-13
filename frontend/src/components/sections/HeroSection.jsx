import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle animate-fade-in-down">We're Getting Married</p>
        <h1 className="hero-title animate-fade-in-up">
          <span className="groom">Phương</span>
          <span className="ampersand">&</span>
          <span className="bride">Tú</span>
        </h1>
        <p className="hero-date animate-fade-in-up">17th January, 2026</p>
        <div className="hero-divider"></div>
        <a href="#countdown" className="btn btn-primary animate-scale-in">
          Save The Date
        </a>
      </div>
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  )
}
