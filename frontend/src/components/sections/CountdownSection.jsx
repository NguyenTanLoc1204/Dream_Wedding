import { useCountdown } from '../../hooks/useCountdown'
import './CountdownSection.css'

export default function CountdownSection() {
  const weddingDate = import.meta.env.VITE_WEDDING_DATE || '2025-12-31T14:00:00'
  const { days, hours, minutes, seconds } = useCountdown(weddingDate)

  return (
    <section id="countdown" className="countdown-section">
      <div className="container">
        <div className="section-title">
          <p className="subtitle">Count Every Second</p>
          <h2>Until We Say "I Do"</h2>
          <div className="divider"></div>
        </div>

        <div className="countdown-timer">
          <div className="countdown-item">
            <div className="countdown-value">{days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-value">{seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  )
}
