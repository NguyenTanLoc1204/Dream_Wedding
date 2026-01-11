import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogService } from '../services/blogService'
import { formatDate } from '../utils/dateUtils'
import Loading from '../components/common/Loading'
import './BlogDetail.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBlog()
  }, [slug])

  const loadBlog = async () => {
    try {
      setLoading(true)
      const response = await blogService.getBlogBySlug(slug)
      setBlog(response.data)
    } catch (error) {
      console.error('Error loading blog:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (!blog) return <div className="container"><p>Không tìm thấy bài viết</p></div>

  return (
    <div className="blog-detail-page">
      <article className="blog-detail section">
        <div className="container blog-container">
          <Link to="/blog" className="back-link">← Quay lại Blog</Link>
          
          <header className="blog-header">
            <h1>{blog.title}</h1>
            <div className="blog-meta">
              <span>✍️ {blog.author}</span>
              <span>📅 {formatDate(blog.publishedAt)}</span>
              <span className="blog-category-tag">{blog.category}</span>
            </div>
          </header>

          <div className="blog-featured-image">
            <img src={blog.imageUrl} alt={blog.title} />
          </div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          
          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}