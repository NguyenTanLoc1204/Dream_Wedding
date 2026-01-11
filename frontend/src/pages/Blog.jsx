import { useState, useEffect } from 'react'
import { blogService } from '../services/blogService'
import BlogCard from '../components/cards/BlogCard'
import Loading from '../components/common/Loading'
import './Blog.css'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const response = await blogService.getAllBlogs({ limit: 20 })
      setBlogs(response.data || [])
    } catch (error) {
      console.error('Error loading blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="blog-page">
      <section className="blog-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Stories</p>
            <h2>Wedding Blog</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="blog-list-section section">
        <div className="container">
          {loading ? (
            <Loading />
          ) : blogs.length > 0 ? (
            <div className="blog-grid">
              {blogs.map(blog => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <p>Chưa có bài viết nào</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}