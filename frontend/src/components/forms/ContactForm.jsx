import { useState } from 'react'
import { contactService } from '../../services/contactService'
import { toast } from 'react-toastify'
import Button from '../common/Button'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await contactService.submitContact(formData)
      toast.success(response.message || 'Gửi lời chúc thành công! 💕')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      // Redirect to wishes page after 2 seconds
      setTimeout(() => {
        window.location.href = '/wishes'
      }, 2000)
    } catch (error) {
      toast.error(error.message || 'Có lỗi xảy ra, vui lòng thử lại')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tên của bạn *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Số điện thoại *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="0901234567"
            pattern="[0-9]{10,11}"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Lời chúc của bạn *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Gửi lời chúc phúc đến chúng mình..."
          maxLength={500}
        ></textarea>
        <small className="char-count">
          {formData.message.length}/500 ký tự
        </small>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        disabled={isSubmitting}
        className="submit-btn"
      >
        {isSubmitting ? 'Đang gửi...' : '💌 Gửi lời chúc'}
      </Button>
    </form>
  )
}