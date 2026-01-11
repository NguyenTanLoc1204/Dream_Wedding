import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/dateUtils'
import './BlogCard.css'

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.imageUrl} alt={blog.title} />
        <span className="blog-category">{blog.category}</span>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-author">✍️ {blog.author}</span>
          <span className="blog-date">📅 {formatDate(blog.publishedAt)}</span>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <Link to={`/blog/${blog.slug}`} className="blog-link">
          Read More →
        </Link>
      </div>
    </div>
  )
}