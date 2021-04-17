import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '../common-styles.css';
import './item-like-styles.css';
import starOut from '../assets/img/star-out.png';
import starActive from '../assets/img/star-active.png';
import like from '../assets/img/like.png';

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
                    <img src={like} alt="좋아요 버튼" className="like-img"/>
                    <img className="slide-img01"></img>
                    <div>
                        <h2><span className="blue">[티셔츠]</span> 오버사이즈 티셔츠</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img02"></div>
                    <div>
                        <h2><span>[티셔츠]</span> v넥 슬림핏 티셔츠</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ItemLike;