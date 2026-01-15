const fs = require('fs');
const path = require('path');

const galleryPath = path.join(__dirname, '../public/images/gallery');
const configPath = path.join(__dirname, '../src/config/galleryConfig.js');

const categories = {
  'pre-wedding': 'Pre-Wedding',
  'engagement': 'Lễ ăn hỏi',
  'ceremony': 'Lễ cưới',
  'reception': 'Tiệc cưới'
};

function countImagesInFolder(folderPath, prefix) {
  try {
    const files = fs.readdirSync(folderPath);
    const imageFiles = files.filter(file => {
      return file.startsWith(prefix) && 
             file.endsWith('.jpg') && 
             /\d+\.jpg$/.test(file);
    });
    
    // Extract numbers and find max
    const numbers = imageFiles.map(file => {
      const match = file.match(/(\d+)\.jpg$/);
      return match ? parseInt(match[1]) : 0;
    });
    
    return numbers.length > 0 ? Math.max(...numbers) : 0;
  } catch (error) {
    console.warn(`⚠️  Folder không tồn tại: ${folderPath}`);
    return 0;
  }
}

function generateConfig() {
  const config = {};
  
  Object.entries(categories).forEach(([key, label]) => {
    const folderPath = path.join(galleryPath, key);
    const count = countImagesInFolder(folderPath, key);
    
    config[key] = {
      label,
      folder: `/images/gallery/${key}`,
      count,
      prefix: key
    };
    
    console.log(`✅ ${label}: ${count} ảnh`);
  });
  
  return config;
}

function updateConfigFile(config) {
  const configContent = `// ============================================
// FILE: frontend/src/config/galleryConfig.js
// Gallery Configuration - Auto-generated
// Last updated: ${new Date().toLocaleString('vi-VN')}
// ============================================

export const galleryConfig = ${JSON.stringify(config, null, 2)}

// Hàm tự động generate image URLs từ config
export const generateGalleryImages = (category) => {
  const config = galleryConfig[category]
  if (!config) return []

  const images = []
  for (let i = 1; i <= config.count; i++) {
    images.push({
      _id: \`\${category}-\${i}\`,
      title: \`\${config.label} \${i}\`,
      imageUrl: \`\${config.folder}/\${config.prefix}\${i}.jpg\`,
      category: category,
      description: \`Ảnh \${config.label} số \${i}\`,
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
`;

  fs.writeFileSync(configPath, configContent);
  console.log('\n✅ Config đã được cập nhật tự động!');
  console.log(`📁 File: ${configPath}`);
}

// Main execution
console.log('🔍 Đang đếm số ảnh trong các folder...\n');
const config = generateConfig();

const totalImages = Object.values(config).reduce((sum, cat) => sum + cat.count, 0);
console.log(`\n📊 Tổng cộng: ${totalImages} ảnh`);

updateConfigFile(config);
