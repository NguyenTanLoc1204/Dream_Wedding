import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { sampleBlogPosts } from '../config/blogConfig'
import { formatDate } from '../utils/dateUtils'
import Loading from '../components/common/Loading'
import './BlogDetail.css'

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const foundBlog = sampleBlogPosts.find(post => post.slug === slug)
    setBlog(foundBlog)
    setLoading(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (loading) return <Loading />
  if (!blog) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Không tìm thấy bài viết</h2>
        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Quay lại Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="blog-detail-page">
      <article className="blog-detail section">
        <div className="container">
          {/* Back Button */}
          <Link to="/blog" className="back-link">
            ← Quay lại xem tất cả bài viết
          </Link>
          
          {/* Header */}
          <header className="blog-header">
            <h1>{blog.title}</h1>
            <div className="blog-info">
              <span>👤 {blog.author}</span>
              <span>📅 {formatDate(blog.publishedAt)}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="blog-featured-image">
            <img src={blog.imageUrl} alt={blog.title} />
          </div>

          {/* Content */}
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
          
          {/* Back Button */}
          <div className="blog-footer">
            <Link to="/blog" className="btn btn-primary">
              ← Quay lại xem tất cả bài viết
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}