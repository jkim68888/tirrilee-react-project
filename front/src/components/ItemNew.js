import React from 'react';
import './item-new-styles.css';
import starOut from '../assets/img/star-out.png';
import starActive from '../assets/img/star-active.png';
import like from '../assets/img/icon-like.png';
import list01 from '../assets/img/list01.png';
import list02 from '../assets/img/list02.png';
import list03 from '../assets/img/list03.png';
import list04 from '../assets/img/list04.png';

const ItemNew = () => {
    return(
        <div className="Item-new-wrapper">
            <div className="Item-new-header">
                <h1>신상품 목록</h1>
                <p>전체보기</p>
            </div>
            <ul className="Item-list-wrapper">
                <li className="Item-list">
                    <img src={like} alt="좋아요 버튼" className="like-img"/>
                    <img src={list01} alt="흰색 에코백 이미지" className="list-img"/>
                    <div className="Item-descript">
                        <h2><span className="blue">[에코백]</span>흰색 에코백</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </li>
                <li className="Item-list">
                    <img src={like} alt="좋아요 버튼" className="like-img"/>
                    <img src={list02} alt="베이지 에코백 이미지" className="list-img"/>
                    <div className="Item-descript">
                        <h2><span className="blue">[에코백]</span>베이지 에코백</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </li>
                <li className="Item-list">
                    <img src={like} alt="좋아요 버튼" className="like-img"/>
                    <img src={list03} alt="친환경 에코백 이미지" className="list-img"/>
                    <div className="Item-descript">
                        <h2><span className="blue">[에코백]</span>친환경 에코백</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </li>
                <li className="Item-list">
                    <img src={like} alt="좋아요 버튼" className="like-img"/>
                    <img src={list04} alt="하얀색 에코백 이미지" className="list-img"/>
                    <div className="Item-descript">
                        <h2><span className="blue">[에코백]</span>하얀색 에코백</h2>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starActive} alt="별이미지-active"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <img src={starOut} alt="별이미지-out"/>
                        <span className="gray">(3.0)</span>
                        <p><span className="bold">10,000</span>원</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ItemNew;