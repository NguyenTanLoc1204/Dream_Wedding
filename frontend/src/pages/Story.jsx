import TimelineCard from '../components/cards/TimelineCard'
import './Story.css'

export default function Story() {
  const timeline = [
    {
      date: 'Tháng 12, 2020',
      title: 'Lần đầu gặp gỡ',
      description: 'Chúng mình tình cờ gặp nhau lần đầu trong một chuyến đi riêng nơi đèo Hải Vân lộng gió. Giữa mây trời và những khúc quanh của núi, chỉ một ánh nhìn thoáng qua cũng đủ làm hai trái tim khẽ run lên, như thể đã nhận ra nhau từ rất lâu rồi.',
      image: '/images/timeline/timeline1.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 2, 2021',
      title: 'Ngày đầu hẹn hò',
      description: 'Lần đầu chàng đến Quy Nhơn để gặp nàng là vào một buổi tối mưa nhẹ. Những hạt mưa rơi khẽ như thì thầm, còn chúng mình sánh bước bên nhau dưới con đường ngập tràn ánh đèn, để mặc thời gian trôi chậm lại, chỉ còn hai trái tim lắng nghe nhịp đập của nhau giữa thành phố biển dịu dàng.',
      image: '/images/timeline/timeline2.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 6, 2021',
      title: 'Gặp gỡ sau khoảng thời gian yêu xa',
      description: 'Sau buổi dạo chơi hôm ấy, chúng mình lại trở về hai nơi xa nhau. Khoảng cách được nối liền bằng những dòng tin nhắn mỗi ngày, từ những lời hỏi thăm giản dị đến những nỗi nhớ lớn dần theo thời gian. Rồi đến một ngày, nàng ra Đà Nẵng chơi, mang theo cả sự mong chờ và rung động, để chúng mình lại được hò hẹn, viết tiếp câu chuyện yêu thương còn dang dở.',
      image: '/images/timeline/timeline3.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 11, 2021',
      title: 'Giữa khoảng cách và hơi ấm tháng mười một',
      description: 'Và rồi, sau bao ngày chờ đợi, mãi đến tận tháng Mười Một chúng mình mới lại có dịp gặp nhau. Trong làn khói nghi ngút của bữa đồ nướng ấm áp, giữa những câu chuyện cười nói thân quen, khoảng cách ngày nào dường như tan biến, chỉ còn lại cảm giác gần gũi và ấm áp như thể chưa từng rời xa.',
      image: '/images/timeline/timeline5.jpg',
      position: 'right'
    },
        {
      date: 'Tháng 1, 2022',
      title: 'Khi khoảng cách dần thu nhỏ',
      description: 'Nửa đầu năm 2022, nàng ra Đà Nẵng làm việc. Từ đó, khoảng cách không còn là những dòng tin nhắn dài nữa, mà là những lần gặp gỡ thường xuyên hơn, nhiều khoảnh khắc bên nhau hơn — những ngày bình dị nhưng đủ đầy, để tình cảm âm thầm lớn lên qua từng ánh nhìn và nụ cười.',
      image: '/images/timeline/timeline8.jpg',
      position: 'left'
    },
    {
      date: 'Nửa đầu năm 2022',
      title: 'Khi hai trái tim không còn khoảng cách',
      description: 'Gặp nhau nhiều hơn, ở bên nhau nhiều hơn, khoảng cách giữa hai ta dần tan biến như chưa từng tồn tại. Tình cảm cứ âm thầm dâng đầy, lan tỏa trong từng khoảnh khắc gần kề, nồng nàn và mãnh liệt đến mức dường như chẳng còn điều gì trên đời có thể ngăn cản được hai trái tim đang cùng nhịp đập, cùng hướng về nhau.',
      image: '/images/timeline/timeline9.jpg',
      position: 'right'
    },
    {
      date: 'Tháng 7, 2022',
      title: 'Một Ngày Đặc Biệt, Một Người Duy Nhất',
      description: 'Ngày chàng tốt nghiệp, giữa khoảnh khắc rực rỡ và thiêng liêng ấy, nàng đứng bên cạnh chàng — người chàng yêu thương nhất đời. Ánh mắt nàng, nụ cười nàng, trở thành điểm tựa dịu dàng trong giây phút trưởng thành quan trọng ấy, khiến khoảnh khắc ấy không chỉ là một dấu mốc của thành công, mà còn là kỷ niệm ngọt ngào khi chàng có nàng ở bên.',
      image: '/images/timeline/timeline7.jpg',
      position: 'left'
    },
    {
      date: 'Tháng 11, 2022',
      title: 'Khi nổi nhớ dẫn lối trở về1',
      description: 'Khoảnh khắc chàng lên Đắk Lắk làm việc cũng là lúc trái tim buộc phải rời xa nơi nó thuộc về — là nàng. Chúng mình bước vào giai đoạn yêu xa, có lẽ là quãng thời gian khắc nghiệt và cô đơn nhất của cuộc tình. Những cái nắm tay, những ánh mắt, những hơi ấm từng quen thuộc giờ chỉ còn tồn tại trong ký ức, được thay thế bằng những dòng tin nhắn dài trong đêm và những cuộc điện thoại muộn, nơi nỗi nhớ lặng lẽ tràn ra theo từng nhịp thở. Ngày qua ngày, khoảng cách không chỉ đo bằng cây số, mà bằng cả những khoảnh khắc không thể ở bên nhau khi cần nhất. Đến tháng Mười Một, chàng nhận ra mình không thể tiếp tục chịu đựng thêm nữa. Nỗi nhớ nàng đã vượt qua mọi lý trí, kéo chàng trở lại Đà Nẵng — không vì điều gì khác, chỉ vì chàng cần được nhìn thấy nàng, được ở bên nàng, để trái tim mình lại được sống đúng nhịp. Và sau tất cả những xa cách, cuộc gặp gỡ ấy không chỉ hâm nóng lại yêu thương, mà còn khiến tình cảm trở nên sâu đậm hơn bao giờ hết. Chính những thử thách của yêu xa lần thứ hai đã dạy chúng mình cách thấu hiểu, cách trân trọng, và cách yêu nhau bằng một tình yêu chín chắn hơn, bền bỉ hơn — để rồi nhận ra rằng, càng đi qua gian khó, hai trái tim ấy lại càng tìm về gần nhau hơn.',
      image: '/images/timeline/timeline10.jpg',
      position: 'right'
    },
    //     {
    //   date: 'Tháng 12, 2022',
    //   title: 'Lời cầu hôn',
    //   description: 'Trên bãi biển hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời mình. Và câu trả lời là "Yes!"',
    //   image: '/images/timeline/timeline1.jpg',
    //   position: 'left'
    // },
    // {
    //   date: 'Tháng 12, 2025',
    //   title: 'Ngày cưới',
    //   description: 'Ngày mà chúng mình chính thức trở thành một gia đình. Hành trình mới bắt đầu từ đây!',
    //   image: '/images/timeline/timeline1.jpg',
    //   position: 'right'
    // }
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
