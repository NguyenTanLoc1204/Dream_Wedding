import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/dateUtils'
import { blogCategories } from '../../config/blogConfig'
import './BlogCard.css'

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${blog.slug}`} className="blog-card-link">
        {/* Image */}
        <div className="blog-image">
          <img src={blog.imageUrl} alt={blog.title} />
          <span className="blog-category">
            {blogCategories[blog.category]?.icon} {blogCategories[blog.category]?.label}
          </span>
          {blog.isFeatured && (
            <span className="blog-featured-badge">⭐ Nổi bật</span>
          )}
        </div>

        {/* Content */}
        <div className="blog-content">
          {/* Meta Info */}
          <div className="blog-meta">
            <span className="blog-author">👤 {blog.author}</span>
            <span className="blog-date">📅 {formatDate(blog.publishedAt)}</span>
          </div>

          {/* Title */}
          <h3 className="blog-title">{blog.title}</h3>

          {/* Excerpt */}
          <p className="blog-excerpt">{blog.excerpt}</p>

          {/* Footer */}
          <div className="blog-footer">
            <div className="blog-stats">
              <span>👁️ {blog.views}</span>
              <span>⏱️ {blog.readTime} phút đọc</span>
            </div>
            <span className="blog-read-more">
              Đọc tiếp →
            </span>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-tags">
              {blog.tags.slice(0, 3).map(tag => (
                <span key={tag} className="blog-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
