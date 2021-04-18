import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../common-styles.css';
import './main-banner-styles.css';

const MainBanner = () => {
    SwiperCore.use([Autoplay, Pagination]);
    return(
        <div className="main-banner-swiper">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                >
                <SwiperSlide>
                    <p>봄 맞이 세일 실시</p>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MainBanner;