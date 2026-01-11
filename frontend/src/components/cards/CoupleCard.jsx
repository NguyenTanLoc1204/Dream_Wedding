import './CoupleCard.css'

export default function CoupleCard({ name, role, image, description, social }) {
  return (
    <div className="couple-card">
      <div className="couple-image">
        <img src={image} alt={name} />
        <div className="couple-overlay">
          <div className="couple-social">
            {social?.facebook && <a href={social.facebook}>📘</a>}
            {social?.instagram && <a href={social.instagram}>📷</a>}
          </div>
        </div>
      </div>
      <div className="couple-info">
        <h3>{name}</h3>
        <p className="couple-role">{role}</p>
        <p className="couple-description">{description}</p>
      </div>
    </div>
  )
}