import React from 'react';
import {Link} from 'react-router-dom';
import '../common-styles.css';
import './bottom-nav.css';
import home from '../assets/img/home.png';
import list from '../assets/img/list.png';
import add from '../assets/img/add.png';
import search from '../assets/img/search.png';
import mypage from '../assets/img/mypage.png';

const BottomNav = () => {
    return(
        <div className="Bottom-nav-wrap">
            <ul className="Bottom-nav-btn-wrap">
                <li>
                    <Link to="/home" className="default-link active">
                        <img src={home} alt="홈 아이콘"/>
                        <p>홈</p>
                    </Link>
                </li>
                <li>
                    <Link to="/list" className="default-link out">
                        <img src={list} alt="상품목록 아이콘"/>
                        <p>상품 목록</p>
                    </Link>
                </li>
                <li>
                    <Link to="/add" className="default-link out">
                        <img src={add} alt="등록 아이콘"/>
                        <p>등록하기</p>
                    </Link>
                </li>
                <li>
                    <Link to="/search" className="default-link out">
                        <img src={search} alt="찾기 아이콘"/>
                        <p>검색</p>
                    </Link>
                </li>
                <li>
                    <Link to="/mypage" className="default-link out">
                        <img src={mypage} alt="마이페이지 아이콘"/>
                        <p>마이페이지</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default BottomNav;