import { useState, useEffect } from 'react'
import { galleryService } from '../services/galleryService'
import Loading from '../components/common/Loading'
import './Gallery.css'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'pre-wedding', label: 'Pre-Wedding' },
    { value: 'engagement', label: 'Lễ ăn hỏi' },
    { value: 'ceremony', label: 'Lễ cưới' },
    { value: 'reception', label: 'Tiệc cưới' }
  ]

  useEffect(() => {
    loadGallery()
  }, [selectedCategory])

  const loadGallery = async () => {
    try {
      setLoading(true)
      const response = await galleryService.getAllGallery(
        selectedCategory === 'all' ? null : selectedCategory
      )
      setImages(response.data || [])
    } catch (error) {
      console.error('Error loading gallery:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Moments</p>
            <h2>Photo Gallery</h2>
            <div className="divider"></div>
          </div>

          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid-section section">
        <div className="container">
          {loading ? (
            <Loading />
          ) : images.length > 0 ? (
            <div className="gallery-grid">
              {images.map(image => (
                <div 
                  key={image._id} 
                  className="gallery-item"
                  onClick={() => setLightboxImage(image)}
                >
                  <img src={image.imageUrl} alt={image.title} />
                  <div className="gallery-overlay">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-images">
              <p>Chưa có ảnh trong danh mục này</p>
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img src={lightboxImage.imageUrl} alt={lightboxImage.title} />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
