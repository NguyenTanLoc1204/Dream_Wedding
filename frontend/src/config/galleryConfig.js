
export const galleryConfig = {
  'pre-wedding': {
    label: 'Pre-Wedding',
    folder: '/images/gallery/pre-wedding',
    count: 15, // Số ảnh có trong folder (pre-wedding1.jpg -> pre-wedding10.jpg)
    prefix: 'pre-wedding'
  },
  'engagement': {
    label: 'Lễ ăn hỏi',
    folder: '/images/gallery/engagement',
    count: 0, // engagement1.jpg -> engagement8.jpg
    prefix: 'engagement'
  },
  'ceremony': {
    label: 'Lễ cưới',
    folder: '/images/gallery/ceremony',
    count: 0, // ceremony1.jpg -> ceremony15.jpg
    prefix: 'ceremony'
  },
  'reception': {
    label: 'Tiệc cưới',
    folder: '/images/gallery/reception',
    count: 0, // reception1.jpg -> reception12.jpg
    prefix: 'reception'
  }
}

// Hàm tự động generate image URLs từ config
export const generateGalleryImages = (category) => {
  const config = galleryConfig[category]
  if (!config) return []

  const images = []
  for (let i = 1; i <= config.count; i++) {
    images.push({
      _id: `${category}-${i}`,
      title: `${config.label} ${i}`,
      imageUrl: `${config.folder}/${config.prefix}${i}.jpg`,
      category: category,
      description: `Ảnh ${config.label} số ${i}`,
      order: i
    })
  }
  return images
}

// Hàm lấy tất cả ảnh từ tất cả categories
export const getAllGalleryImages = () => {
  const allImages = []
  Object.keys(galleryConfig).forEach(category => {
    const images = generateGalleryImages(category)
    allImages.push(...images)
  })
  return allImages
}

// Hàm lấy ảnh theo category
export const getImagesByCategory = (category) => {
  if (category === 'all') {
    return getAllGalleryImages()
  }
  return generateGalleryImages(category)
}
