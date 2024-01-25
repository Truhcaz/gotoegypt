import React from "react";
import styled from "styled-components";
import carousel1 from '../assets/img/carousel1.png'
import carousel2 from '../assets/img/carousel2.png'
import carousel3 from '../assets/img/carousel3.png'
import { ReactComponent as Arrow } from "../assets/icon/arrow.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

const StyledCarousel = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100%;

  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
    width:100%;
    height: 600px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .slide__text{
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap:1em;
      padding-bottom: 50px;
      background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(13,13,13,0.6474964985994398) 100%);

      h3{
        font-family: var(--montserrat-font);
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      h2{
        font-family: var(--playfair-font);
        letter-spacing: 1px;
      }
    }
  }

  .arrow{
    width: 35px;
    height: 35px;
  }
  .back, .next{
    font-family: var(--montserrat-font);
    cursor: pointer;
  }
  .back{
    .arrow{
      rotate: -180deg;
      }
  }
`;

const Carousel = () => {
  return (
    <StyledCarousel>
        <div className="back">
                    <Arrow className='arrow'/>
                    <div className="back__text">Back</div>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: '.next',
          prevEl: '.back'
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={carousel1}
            alt='exploration'
          />
          <div className="slide__text">
            <h3> Egypt</h3>
            <h2> Exploration </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carousel2}
            alt="giza pyramids"
          />
          <div className="slide__text">
            <h3> Caire</h3>
            <h2> Giza pyramids </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carousel3}
            alt="valley of kings"
          />
          <div className="slide__text">
            <h3> Luxor</h3>
            <h2> Valley of kings </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carousel1}
            alt='exploration'
          />
          <div className="slide__text">
            <h3> Egypt</h3>
            <h2> Exploration </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carousel2}
            alt="giza pyramids"
          />
          <div className="slide__text">
            <h3> Caire</h3>
            <h2> Giza pyramids </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={carousel3}
            alt="valley of kings"
          />
          <div className="slide__text">
            <h3> Luxor</h3>
            <h2> Valley of kings </h2>
          </div>
        </SwiperSlide>
      </Swiper>
        <div className="next">
                    <Arrow className='arrow'/>
                    <div className="next__text">Next</div>
        </div>
    </StyledCarousel>
  );
};

export default Carousel;
