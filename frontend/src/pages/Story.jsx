import TimelineCard from '../components/cards/TimelineCard'
import './Story.css'

export default function Story() {
  const timeline = [
    {
      date: 'Tháng 3, 2020',
      title: 'Lần đầu gặp gỡ',
      description: 'Chúng mình gặp nhau lần đầu trong một buổi họp mặt bạn bè. Ánh mắt đầu tiên đã khiến trái tim chúng mình rung động.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
      // image: '/images/story/first-meet.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 7, 2020',
      title: 'Ngày đầu hẹn hò',
      description: 'Buổi tối mưa nhẹ, chúng mình cùng dạo bước dưới con đường ngập tràn ánh đèn. Đó là lúc chúng mình quyết định bắt đầu.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600',
      position: 'right'
    },
    {
      date: 'Tháng 12, 2022',
      title: 'Lời cầu hôn',
      description: 'Trên bãi biển hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời mình. Và câu trả lời là "Yes!"',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      position: 'left'
    },
    {
      date: 'Tháng 12, 2025',
      title: 'Ngày cưới',
      description: 'Ngày mà chúng mình chính thức trở thành một gia đình. Hành trình mới bắt đầu từ đây!',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600',
      position: 'right'
    }
  ]

  return (
    <div className="story-page">
      <section className="story-hero section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Our Journey</p>
            <h2>Love Story Timeline</h2>
            <div className="divider"></div>
          </div>
        </div>
      </section>

      <section className="timeline-section section">
        <div className="container">
          <div className="timeline">
            {timeline.map((event, index) => (
              <TimelineCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
