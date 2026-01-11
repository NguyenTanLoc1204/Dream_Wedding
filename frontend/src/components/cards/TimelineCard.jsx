import './TimelineCard.css'

export default function TimelineCard({ date, title, description, image, position }) {
  return (
    <div className={`timeline-card ${position}`}>
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        {image && (
          <div className="timeline-image">
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </div>
  )
}