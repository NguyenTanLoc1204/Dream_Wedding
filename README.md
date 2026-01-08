# WEDDING WEBSITE PROJECT STRUCTURE

## 📁 Backend Structure (Dream_Wedding/backend)

```
backend/
├── config/
│   ├── db.js                    # MongoDB connection
│   └── email.js                 # Email configuration
├── controllers/
│   ├── contactController.js     # Handle contact form
│   ├── galleryController.js     # Gallery CRUD
│   ├── blogController.js        # Blog posts CRUD
│   └── rsvpController.js        # Guest responses (optional)
├── models/
│   ├── ContactModel.js          # Contact schema
│   ├── GalleryModel.js          # Gallery images schema
│   └── BlogModel.js             # Blog posts schema
├── routes/
│   ├── contactRoute.js          # /api/contact
│   ├── galleryRoute.js          # /api/gallery
│   └── blogRoute.js             # /api/blog
├── services/
│   ├── emailService.js          # Send email logic
│   └── uploadService.js         # Image upload handling
├── middlewares/
│   ├── errorMiddleware.js       # Error handling
│   └── validateMiddleware.js    # Input validation
├── utils/
│   ├── emailTemplate.js         # HTML email templates
│   └── validator.js             # Custom validators
├── .env                         # Environment variables
├── app.js                       # Express app setup
└── server.js                    # Server entry point
```

## 📁 Frontend Structure (Dream_Wedding/frontend)

```
frontend/
├── public/
│   ├── images/                  # Static images
│   │   ├── hero/
│   │   ├── couple/
│   │   ├── gallery/
│   │   └── wedding/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx       # Top navigation
│   │   │   ├── Footer.jsx       # Footer section
│   │   │   ├── Loading.jsx      # Loading spinner
│   │   │   └── Button.jsx       # Custom button
│   │   ├── cards/
│   │   │   ├── CoupleCard.jsx   # Couple info card
│   │   │   ├── TimelineCard.jsx # Story timeline item
│   │   │   └── BlogCard.jsx     # Blog post card
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx  # Home hero
│   │   │   ├── CountdownSection.jsx # Countdown timer
│   │   │   ├── StorySection.jsx # Love story
│   │   │   └── ContactSection.jsx # Contact form
│   │   └── forms/
│   │       └── ContactForm.jsx  # Contact form
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── About.jsx            # About couple
│   │   ├── Gallery.jsx          # Photo gallery
│   │   ├── Story.jsx            # Love story timeline
│   │   ├── Wedding.jsx          # Wedding details
│   │   ├── Blog.jsx             # Blog list
│   │   ├── BlogDetail.jsx       # Single blog post
│   │   └── Contact.jsx          # Contact page
│   ├── services/
│   │   ├── api.js               # Axios config
│   │   ├── contactService.js    # Contact API calls
│   │   └── galleryService.js    # Gallery API calls
│   ├── hooks/
│   │   ├── useCountdown.js      # Countdown timer hook
│   │   └── useScrollAnimation.js # Scroll animations
│   ├── utils/
│   │   ├── dateUtils.js         # Date formatting
│   │   └── imageUtils.js        # Image handling
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── animations.css       # Animations
│   │   └── responsive.css       # Media queries
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
```

## 🔧 Key Files Configuration

### Backend .env
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding_db
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

### Frontend .env
```env
VITE_API_URL=http://localhost:5000/api
VITE_WEDDING_DATE=2025-12-31
VITE_BRIDE_NAME=Chi
VITE_GROOM_NAME=Be
```

## 🎨 Design Features

### Color Scheme (inspired by demo)
- Primary: #d4af37 (Gold)
- Secondary: #f5f5f5 (Light Gray)
- Accent: #8b7355 (Bronze)
- Text: #333333
- Background: #ffffff

### Typography
- Headings: 'Playfair Display', serif
- Body: 'Lato', sans-serif
- Script: 'Great Vibes', cursive

### Animations
- Fade in on scroll
- Smooth parallax effects
- Hover transitions
- Loading animations
- Gallery lightbox

## 📦 NPM Packages

### Backend
- express
- mongoose
- cors
- dotenv
- nodemailer
- express-validator
- multer (for image upload)
- bcryptjs (if auth needed)

### Frontend
- react
- react-router-dom
- axios
- react-icons
- framer-motion (animations)
- react-lightbox (gallery)
- react-toastify (notifications)
- date-fns (date handling)

## 🚀 Development Flow

1. **Phase 1**: Setup backend structure + MongoDB connection
2. **Phase 2**: Create models and routes
3. **Phase 3**: Implement email service
4. **Phase 4**: Setup frontend routing
5. **Phase 5**: Build reusable components
6. **Phase 6**: Create all pages
7. **Phase 7**: Connect frontend to backend
8. **Phase 8**: Styling and animations
9. **Phase 9**: Testing and optimization
10. **Phase 10**: Deployment

## 📝 Database Collections

### contacts
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "createdAt": "date"
}
```

### gallery
```json
{
  "title": "string",
  "imageUrl": "string",
  "category": "string",
  "description": "string",
  "order": "number"
}
```

### blogs
```json
{
  "title": "string",
  "slug": "string",
  "content": "string",
  "excerpt": "string",
  "imageUrl": "string",
  "author": "string",
  "publishedAt": "date"
}
```
