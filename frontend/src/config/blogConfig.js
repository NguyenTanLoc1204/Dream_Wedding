
export const blogCategories = {
  preparation: { label: 'Chuẩn bị đám cưới', icon: '📝' },
  tips: { label: 'Tips & Tricks', icon: '💡' },
  story: { label: 'Câu chuyện tình yêu', icon: '💕' },
  announcement: { label: 'Thông báo', icon: '📢' },
  review: { label: 'Review địa điểm', icon: '⭐' }
}

// Sample blog posts - Trong thực tế sẽ load từ API/MongoDB
export const sampleBlogPosts = [
  {
    _id: '1',
    title: 'Cách chọn địa điểm chụp ảnh cưới hoàn hảo',
    slug: 'chon-dia-diem-chup-anh-cuoi',
    excerpt: 'Chia sẻ kinh nghiệm chọn địa điểm chụp ảnh cưới đẹp và phù hợp với phong cách của bạn...',
    content: `
      <h2>Lời mở đầu</h2>
      <p>Chụp ảnh cưới là một trong những kỷ niệm đáng nhớ nhất trong cuộc đời. Việc chọn địa điểm phù hợp sẽ giúp bộ ảnh của bạn thêm phần ấn tượng và độc đáo.</p>
      
      <h3>1. Xác định phong cách</h3>
      <p>Trước tiên, bạn cần xác định phong cách ảnh cưới mà mình yêu thích:</p>
      <ul>
        <li><strong>Phong cách cổ điển:</strong> Nhà thờ, lâu đài, công viên cổ kính</li>
        <li><strong>Phong cách hiện đại:</strong> Cao ốc, cafe, studio</li>
        <li><strong>Phong cách tự nhiên:</strong> Biển, núi, rừng, cánh đồng</li>
        <li><strong>Phong cách vintage:</strong> Phố cổ, ga tàu cũ, khu phố xưa</li>
      </ul>

      <h3>2. Thời điểm chụp</h3>
      <p>Ánh sáng là yếu tố quan trọng nhất. Nên chọn:</p>
      <ul>
        <li>Sáng sớm (5:00 - 7:00): Ánh sáng vàng dịu nhẹ</li>
        <li>Chiều tà (16:00 - 18:00): Golden hour, ánh sáng đẹp nhất</li>
      </ul>

      <h3>3. Một số địa điểm gợi ý tại TP.HCM</h3>
      <ul>
        <li>Đường sách Nguyễn Văn Bình (Q1)</li>
        <li>Dinh Độc Lập (Q1)</li>
        <li>Công viên Gia Định (Gò Vấp)</li>
        <li>Thảo Cầm Viên (Q1)</li>
      </ul>

      <blockquote>
        "Ảnh cưới đẹp không chỉ đến từ địa điểm, mà còn từ tình cảm chân thành của hai người" - Chi & Be
      </blockquote>
    `,
    imageUrl: '/images/backgrounds/hero-bg.jpg',
    author: 'Chi',
    category: 'tips',
    tags: ['ảnh cưới', 'địa điểm', 'tips'],
    isPublished: true,
    isFeatured: true,
    views: 1234,
    publishedAt: '2024-12-01T10:00:00.000Z',
    readTime: 5
  },
  {
    _id: '2',
    title: 'Checklist chuẩn bị đám cưới hoàn hảo',
    slug: 'checklist-chuan-bi-dam-cuoi',
    excerpt: 'Danh sách chi tiết những việc cần chuẩn bị trước đám cưới 6 tháng để không bỏ sót điều gì...',
    content: `
      <h2>Timeline 6 tháng trước đám cưới</h2>
      <p>Chuẩn bị đám cưới là một quá trình dài và phức tạp. Dưới đây là checklist chi tiết giúp bạn không bỏ sót điều gì.</p>
      
      <h3>6 tháng trước (T-6)</h3>
      <ul>
        <li>✅ Xác định ngân sách tổng</li>
        <li>✅ Đặt nhà hàng/địa điểm tổ chức</li>
        <li>✅ Chọn nhiếp ảnh gia, quay phim</li>
        <li>✅ Chọn áo cưới</li>
      </ul>

      <h3>4 tháng trước (T-4)</h3>
      <ul>
        <li>✅ Đặt thiệp cưới</li>
        <li>✅ Chọn MC, ban nhạc</li>
        <li>✅ Lên concept trang trí</li>
      </ul>

      <h3>2 tháng trước (T-2)</h3>
      <ul>
        <li>✅ Gửi thiệp mời</li>
        <li>✅ Xác nhận số lượng khách</li>
        <li>✅ Thử makeup</li>
      </ul>

      <h3>1 tháng trước (T-1)</h3>
      <ul>
        <li>✅ Confirm lại tất cả vendors</li>
        <li>✅ Chuẩn bị quà cảm ơn</li>
        <li>✅ Tập lễ cưới</li>
      </ul>
    `,
    imageUrl: '/images/backgrounds/hero-bg.jpg',
    author: 'Be',
    category: 'preparation',
    tags: ['checklist', 'chuẩn bị', 'timeline'],
    isPublished: true,
    isFeatured: true,
    views: 2156,
    publishedAt: '2024-11-15T14:00:00.000Z',
    readTime: 8
  },
  {
    _id: '3',
    title: 'Câu chuyện tình yêu của chúng mình',
    slug: 'cau-chuyen-tinh-yeu-cua-chung-minh',
    excerpt: 'Từ lần gặp đầu tiên ngẫu nhiên đến quyết định về chung một nhà, đây là hành trình 5 năm đầy kỷ niệm...',
    content: `
      <h2>Chương 1: Lần đầu gặp gỡ</h2>
      <p>Tất cả bắt đầu từ một buổi chiều mưa tháng 3/2020. Mình gặp nhau tại một quán cafe nhỏ ở Quận 1...</p>
      
      <p>Lúc đó, mình đang ngồi làm việc thì anh ấy bước vào, tóc ướt vì mưa, mắt áo một chiếc laptop cũ. Có lẽ là định mệnh, chúng mình chọn ngồi hai bàn đối diện nhau.</p>

      <blockquote>
        "Có những cuộc gặp gỡ tưởng như tình cờ, nhưng thực chất là định mệnh đã sắp đặt" - Chi
      </blockquote>

      <h3>Chương 2: Những lần hẹn hò đầu tiên</h3>
      <p>Sau lần gặp ở quán cafe, chúng mình bắt đầu nhắn tin thường xuyên. Anh ấy rủ mình đi xem phim...</p>

      <h3>Chương 3: Quyết định về chung một nhà</h3>
      <p>Sau 5 năm bên nhau, trải qua bao thăng trầm, chúng mình nhận ra rằng đây chính là người mình muốn gắn bó cả đời...</p>
    `,
    imageUrl: '/images/backgrounds/hero-bg.jpg',
    author: 'Chi & Be',
    category: 'story',
    tags: ['love story', 'tình yêu', 'hành trình'],
    isPublished: true,
    isFeatured: false,
    views: 3421,
    publishedAt: '2024-10-20T09:00:00.000Z',
    readTime: 10
  },
  {
    _id: '4',
    title: 'Top 5 nhà hàng tiệc cưới tốt nhất TP.HCM',
    slug: 'top-5-nha-hang-tiec-cuoi-tphcm',
    excerpt: 'Review chi tiết 5 địa điểm tổ chức tiệc cưới sang trọng, đẹp và chất lượng nhất tại TP.HCM...',
    content: `
      <h2>1. Khách sạn Sofitel Saigon Plaza</h2>
      <p><strong>Giá:</strong> 1.800.000 - 2.500.000 VNĐ/khách</p>
      <p><strong>Sức chứa:</strong> 500-800 khách</p>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Sang trọng, đẳng cấp 5 sao</li>
        <li>Menu buffet đa dạng</li>
        <li>Hệ thống âm thanh ánh sáng hiện đại</li>
      </ul>

      <h2>2. Riverside Palace</h2>
      <p><strong>Giá:</strong> 1.200.000 - 1.800.000 VNĐ/khách</p>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>View sông Sài Gòn tuyệt đẹp</li>
        <li>Không gian thoáng đãng</li>
      </ul>

      <h2>3. Gem Center</h2>
      <p><strong>Giá:</strong> 900.000 - 1.500.000 VNĐ/khách</p>
      
      <h2>4. White Palace</h2>
      <p><strong>Giá:</strong> 1.500.000 - 2.000.000 VNĐ/khách</p>

      <h2>5. The Reverie Saigon</h2>
      <p><strong>Giá:</strong> 2.500.000 - 3.500.000 VNĐ/khách</p>
    `,
    imageUrl: '/images/backgrounds/hero-bg.jpg',
    author: 'Be',
    category: 'review',
    tags: ['nhà hàng', 'tiệc cưới', 'review', 'TP.HCM'],
    isPublished: true,
    isFeatured: false,
    views: 1876,
    publishedAt: '2024-11-01T16:00:00.000Z',
    readTime: 6
  },
//   {
//     _id: '5',
//     title: 'Thông báo hoãn đám cưới do dịch COVID-19',
//     slug: 'thong-bao-hoan-dam-cuoi',
//     excerpt: 'Thông báo về việc dời lịch tổ chức đám cưới sang tháng 12/2025...',
//     content: `
//       <h2>Kính gửi quý khách mời</h2>
//       <p>Chúng mình xin thông báo về việc hoãn đám cưới do tình hình dịch bệnh COVID-19 diễn biến phức tạp.</p>
      
//       <p><strong>Thời gian mới:</strong> 31/12/2025</p>
//       <p><strong>Địa điểm:</strong> Khách sạn Sofitel Saigon Plaza</p>

//       <p>Chúng mình rất mong nhận được sự thông cảm và ủng hộ từ mọi người.</p>

//       <p>Trân trọng,<br>Chi & Be</p>
//     `,
//     imageUrl: '/images/blog/thong-bao.jpg',
//     author: 'Chi & Be',
//     category: 'announcement',
//     tags: ['thông báo', 'hoãn đám cưới'],
//     isPublished: true,
//     isFeatured: false,
//     views: 892,
//     publishedAt: '2024-09-10T10:00:00.000Z',
//     readTime: 2
//   }
]

// Hàm lấy bài viết theo category
export const getPostsByCategory = (category) => {
  if (!category || category === 'all') {
    return sampleBlogPosts
  }
  return sampleBlogPosts.filter(post => post.category === category)
}

// Hàm search bài viết
export const searchPosts = (keyword) => {
  const lowerKeyword = keyword.toLowerCase()
  return sampleBlogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerKeyword) ||
    post.excerpt.toLowerCase().includes(lowerKeyword) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  )
}

// Hàm lấy bài viết nổi bật
export const getFeaturedPosts = () => {
  return sampleBlogPosts.filter(post => post.isFeatured)
}

// Hàm lấy bài viết liên quan
export const getRelatedPosts = (currentPostId, category, limit = 3) => {
  return sampleBlogPosts
    .filter(post => post._id !== currentPostId && post.category === category)
    .slice(0, limit)
}

// Hàm lấy bài viết mới nhất
export const getLatestPosts = (limit = 5) => {
  return [...sampleBlogPosts]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit)
}

// Hàm lấy bài viết phổ biến
export const getPopularPosts = (limit = 5) => {
  return [...sampleBlogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}