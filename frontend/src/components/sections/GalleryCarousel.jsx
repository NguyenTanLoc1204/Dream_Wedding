import { useState, useEffect, useRef } from 'react'
import './GalleryCarousel.css'

export default function GalleryCarousel({ images, autoPlayInterval = 5000, onImageError }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isAutoPlaying || isPaused || images.length === 0) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isAutoPlaying, isPaused, autoPlayInterval, images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  if (!images || images.length === 0) {
    return (
      <div className="carousel-empty">
        <p>Chưa có ảnh để hiển thị</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--silver)', marginTop: '10px' }}>
          Thêm ảnh vào các thư mục gallery và cập nhật config
        </p>
      </div>
    )
  }

  return (
    <div 
      className="gallery-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-main">
        <div 
          className="carousel-track"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={image.imageUrl}
                alt={image.title || `Slide ${index + 1}`}
                className="carousel-image"
                onError={(e) => {
                  if (onImageError) {
                    onImageError(image._id)
                  }
                }}
              />
              {image.title && (
                <div className="carousel-caption">
                  <h3>{image.title}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <button 
          className="carousel-autoplay-toggle"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? 'Pause' : 'Play'}
          title={isAutoPlaying ? 'Tạm dừng' : 'Phát'}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>

        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`carousel-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{ 
              backgroundImage: `url(${image.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {isAutoPlaying && !isPaused && (
        <div className="carousel-progress">
          <div 
            className="carousel-progress-bar"
            key={currentIndex}
            style={{
              animation: `progress ${autoPlayInterval}ms linear`
            }}
          />
        </div>
      )}
    </div>
  )
}