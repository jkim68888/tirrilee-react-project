import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../common-styles.css';
import './item-like-styles.css';

const ItemLike = () => {
    return(
        <div className="item-like-wrapper">
            <div className="item-like-header">
                <h1>좋아한 목록</h1>
                <p>전체보기</p>
            </div>
            <Swiper
                spaceBetween={12}
                slidesPerView={1.5}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="slide-img01"></div>
                    <div>
                        <h2><span>[티셔츠]</span> 오버사이즈 티셔츠</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img02"></div>
                    <div>
                        <h2><span>[티셔츠]</span> v넥 슬림핏 티셔츠</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ItemLike;