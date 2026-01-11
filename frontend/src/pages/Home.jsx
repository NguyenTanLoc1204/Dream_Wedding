import HeroSection from '../components/sections/HeroSection'
import CountdownSection from '../components/sections/CountdownSection'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <CountdownSection />
      
      <section className="welcome-section section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">Welcome</p>
            <h2>Join Us In Our Special Day</h2>
            <div className="divider"></div>
          </div>
          <div className="welcome-content">
            <p>
              Chúng mình vô cùng hạnh phúc được chia sẻ niềm vui này cùng gia đình và bạn bè.
              Sự hiện diện của bạn sẽ làm cho ngày đặc biệt của chúng mình thêm ý nghĩa và trọn vẹn.
            </p>
            <p>
              Hãy cùng chúng mình đếm ngược từng phút giây cho đến ngày trọng đại và 
              tạo nên những kỷ niệm đẹp không thể quên!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
