import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import goBack from '../../assets/img/icon-back.png';

const AddItems = () => {
    return(
        <div className="Add-items-wrap">
            <div className="Add-items-header">
                <Link to="/home">
                    <img src={goBack} alt="뒤로가기 아이콘"/>
                </Link>
                <p>등록하기</p>
                <Link to="/add/complete" className="default-link">완료</Link>
            </div>
            <div className="Add-item-img">

            </div>
            <div className="Add-item-title">

            </div>
            <div className="Add-item-price">

            </div>
            <div className="Add-item-description">

            </div>
            <div className="Add-item-categories">

            </div>
        </div>
    );
}

export default AddItems;