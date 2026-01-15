import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { sampleBlogPosts } from '../config/blogConfig'
import { formatDate } from '../utils/dateUtils'
import './Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Mặc định sắp xếp: Mới nhất lên đầu
    const sortedPosts = [...sampleBlogPosts].sort((a, b) => 
      new Date(b.publishedAt) - new Date(a.publishedAt)
    )
    setPosts(sortedPosts)
  }, [])

  return (
    <div className="blog-page">
      {/* Hero Section - Giữ nguyên nội dung text theo yêu cầu */}
      <section className="blog-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Stories</p>
            <h2>Wedding Blog</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      {/* Blog List - Style Classic */}
      <section className="blog-list section">
        <div className="container blog-container-classic">
          <div className="blog-stream">
            {posts.map(post => (
              <article key={post._id} className="blog-classic-item">
                
                {/* 1. Image */}
                <div className="blog-media">
                  <Link to={`/blog/${post.slug}`}>
                    <img src={post.imageUrl} alt={post.title} loading="lazy" />
                  </Link>
                </div>

                {/* 2. Content Body (Centered) */}
                <div className="blog-body">
                  {/* Date */}
                  <div className="blog-date">
                    {formatDate(post.publishedAt)}
                  </div>

                  {/* Title */}
                  <h3 className="blog-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Meta */}
                  <div className="blog-meta-info">
                    <span>By {post.author}</span>
                    <span className="sep">/</span>
                    <span>Wedding Stories</span>
                  </div>

                  {/* Excerpt */}
                  <p className="blog-excerpt">{post.excerpt}</p>

                  {/* Button */}
                  {/* <Link to={`/blog/${post.slug}`} className="btn-read-more">
                    Đọc Tiếp
                  </Link> */}
                </div>

                {/* Decorative Divider between posts */}
                <div className="blog-divider-bottom">
                  <span className="icon-leaf">❦</span>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}