import { useState, useEffect } from 'react'
import { galleryConfig, getImagesByCategory } from '../config/galleryConfig'
import GalleryCarousel from '../components/sections/GalleryCarousel'
import Loading from '../components/common/Loading'
import './Gallery.css'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [viewMode, setViewMode] = useState('carousel')
  const [imageLoadErrors, setImageLoadErrors] = useState({})

  const categories = [
    { value: 'all', label: 'Tất cả' },
    ...Object.entries(galleryConfig).map(([key, config]) => ({
      value: key,
      label: config.label
    }))
  ]

  useEffect(() => {
    loadGallery()
  }, [selectedCategory])

  const loadGallery = () => {
    setLoading(true)
    
    // Simulate loading delay
    setTimeout(() => {
      const galleryImages = getImagesByCategory(selectedCategory)
      setImages(galleryImages)
      setLoading(false)
    }, 300)
  }

  const handleImageError = (imageId) => {
    setImageLoadErrors(prev => ({
      ...prev,
      [imageId]: true
    }))
  }

  const getImageSrc = (image) => {
    if (imageLoadErrors[image._id]) {
      return `https://via.placeholder.com/1200x800/e8a5b0/ffffff?text=${encodeURIComponent(image.title)}`
    }
    return image.imageUrl
  }

  const getTotalImagesCount = () => {
    if (selectedCategory === 'all') {
      return Object.values(galleryConfig).reduce((sum, config) => sum + config.count, 0)
    }
    return galleryConfig[selectedCategory]?.count || 0
  }

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Moments</p>
            <h2>Photo Gallery</h2>
            <div className="divider"></div>
            <p className="gallery-stats">
              📸 {getTotalImagesCount()} ảnh 
              {selectedCategory !== 'all' && ` · ${galleryConfig[selectedCategory]?.label}`}
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="gallery-view-toggle">
            <button
              className={`view-btn ${viewMode === 'carousel' ? 'active' : ''}`}
              onClick={() => setViewMode('carousel')}
            >
              🎬 Carousel
            </button>
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              📷 Grid
            </button>
          </div>

          {/* Category Filters */}
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

      <section className="gallery-content-section section">
        <div className="container">
          {loading ? (
            <Loading />
          ) : images.length > 0 ? (
            <>
              {viewMode === 'carousel' ? (
                <GalleryCarousel 
                  images={images.map(img => ({
                    ...img,
                    imageUrl: getImageSrc(img)
                  }))}
                  autoPlayInterval={5000}
                  onImageError={handleImageError}
                />
              ) : (
                <div className="gallery-grid">
                  {images.map(image => (
                    <div 
                      key={image._id} 
                      className="gallery-item"
                      onClick={() => setLightboxImage(image)}
                    >
                      <img 
                        src={getImageSrc(image)} 
                        alt={image.title}
                        onError={() => handleImageError(image._id)}
                      />
                      <div className="gallery-overlay">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="no-images">
              <p>Coming soon...</p>
              {/* <p className="hint">
                Thêm ảnh vào thư mục: <code>{galleryConfig[selectedCategory]?.folder || '/images/gallery/'}</code>
              </p> */}
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img 
              src={getImageSrc(lightboxImage)} 
              alt={lightboxImage.title}
              onError={() => handleImageError(lightboxImage._id)}
            />
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
