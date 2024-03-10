import { NavLink } from "react-router-dom";
import './homePreview.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Pagination, Navigation, EffectCards, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import 'swiper/css/zoom';
import swiper1 from "../../shared/images/swiper1.jpg";
import swiper2 from "../../shared/images/swiper2.jpg";
import swiper3 from "../../shared/images/swiper3.jpg";

function HomePreview() {
  return (
    <div className="homePreview">
      <div className="homePreviewContent">
        <h1>Банк идей Россети Сибирь </h1><h3>Предназначен для сбора и рассмотрения предложений по совершенствованию деятельности компании, а также для формирования базы лучших практик в целях их тиражирования.</h3>
        <NavLink to="/documentation">Документация, инструкции</NavLink>
      </div>
      <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        parallax={true}
        effect={'cards'}
        grabCursor={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        zoom={true}
        navigation={true}
        modules={[Parallax, Autoplay, Pagination, Navigation, EffectCards, Zoom]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderContent1">
            <div className="swiper-zoom-container">
              <img src={swiper1} />
            </div>
            <div className="slideInfo">
              <h3>2500</h3>
              <h3>Идей подано</h3>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sliderContent2">
          <div className="swiper-zoom-container">
              <img src={swiper2} />
            </div>
            <div className="slideInfo">
              <h3>1500</h3>
              <h3>Идей одобрено</h3>
            </div>
            
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="sliderContent3">
          <div className="swiper-zoom-container">
              <img src={swiper3} />
            </div>
            <div className="slideInfo">
              <h3>500</h3>
              <h3>Идей внедрено</h3>
            </div>
          </div>
          </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default HomePreview;