const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const contactRoutes = require('./routes/contactRoute');
const galleryRoutes = require('./routes/galleryRoute');
const blogRoutes = require('./routes/blogRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// ===== Security Middleware =====
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// ===== Rate Limiting (Chống spam form) =====
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit mỗi IP 10 requests
  message: 'Quá nhiều yêu cầu, vui lòng thử lại sau 15 phút'
});

// ===== Body Parser =====
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ===== Logging =====
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ===== Routes =====
app.get('/api', (req, res) => {
  res.json({ 
    message: '💒 Wedding API is running',
    version: '1.0.0',
    endpoints: {
      contact: '/api/contact',
      gallery: '/api/gallery',
      blog: '/api/blog'
    }
  });
});

app.use('/api/contact', limiter, contactRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/blog', blogRoutes);

// ===== Error Handling =====
app.use(errorMiddleware);

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

module.exports = app;