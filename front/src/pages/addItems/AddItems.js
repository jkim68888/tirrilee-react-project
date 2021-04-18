import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import goBack from '../../assets/img/icon-back.png';

const AddItems = () => {
    return(
        <div className="Add-items-wrap">
            <div className="table">
                <div className="table-cell">
                    <div className="Add-items-header">
                        <Link to="/home">
                            <img src={goBack} alt="뒤로가기 아이콘"/>
                        </Link>
                        <p>등록하기</p>
                        <Link to="/add/complete" className="default-link">완료</Link>
                    </div>
                </div>
            </div>
            <div className="Add-item-img">
                <button type="button" className="Add-item-img-btn">사진을 등록하세요.</button>
            </div>
            <div className="Add-item-form">
                <div className="Add-item-title">
                    <label for="item-title">제품명</label>
                    <input type="text" id="item-title" placeholder="제품명 입력"/>
                </div>
                <div className="Add-item-price">
                    <label for="item-price">가격</label>
                    <input type="text" id="item-price" placeholder="가격 원"/>
                </div>
                <div className="Add-item-description">
                    <label for="item-descript">상세설명</label>
                    <textarea name="Text1" id="item-descript" placeholder="상세 설명 입력"/>
                </div>
            </div>
            <div className="Add-item-categories">
                <h2>카테고리</h2>
                <div className="category-lists">
                    <div className="category">에코백</div>
                    <div className="category">티셔츠</div>
                    <div className="category">기타용품</div>
                </div>
            </div>
        </div>
    );
}

export default AddItems;