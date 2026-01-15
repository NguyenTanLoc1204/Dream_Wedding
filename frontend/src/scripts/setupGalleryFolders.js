const fs = require('fs');
const path = require('path');

const galleryBasePath = path.join(__dirname, '../public/images/gallery');

const categories = {
  'pre-wedding': { count: 10, label: 'Pre-Wedding' },
  'engagement': { count: 8, label: 'Lễ ăn hỏi' },
  'ceremony': { count: 15, label: 'Lễ cưới' },
  'reception': { count: 12, label: 'Tiệc cưới' }
};

function createFolders() {
  console.log('📁 Đang tạo cấu trúc thư mục...\n');
  
  // Tạo thư mục gallery chính
  if (!fs.existsSync(galleryBasePath)) {
    fs.mkdirSync(galleryBasePath, { recursive: true });
  }
  
  // Tạo từng category folder
  Object.entries(categories).forEach(([key, { count, label }]) => {
    const folderPath = path.join(galleryBasePath, key);
    
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`✅ Đã tạo: ${folderPath}`);
    } else {
      console.log(`ℹ️  Đã tồn tại: ${folderPath}`);
    }
    
    // Tạo file README trong mỗi folder
    const readmePath = path.join(folderPath, 'README.md');
    const readmeContent = `# ${label}

Đặt ${count} ảnh vào folder này với tên:
- ${key}1.jpg
- ${key}2.jpg
- ${key}3.jpg
- ...
- ${key}${count}.jpg

## Quy cách ảnh:
- Format: JPG
- Kích thước: 1200x800px (landscape)
- Chất lượng: 80-85%
- Dung lượng: < 500KB/ảnh
`;
    
    fs.writeFileSync(readmePath, readmeContent);
  });
  
  console.log('\n✅ Cấu trúc thư mục đã được tạo!');
  console.log('\n📝 Bước tiếp theo:');
  console.log('1. Copy ảnh của bạn vào các folder tương ứng');
  console.log('2. Đặt tên đúng format: {category}1.jpg, {category}2.jpg, ...');
  console.log('3. Chạy: npm run count-gallery');
  console.log('4. Refresh browser!');
}

createFolders();
