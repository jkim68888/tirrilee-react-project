import React from 'react';
import {Link} from 'react-router-dom';
import ico from '../../assets/icon-back.png';
import '../../common-styles.css';
import './styles.css';

const Id = () => {
    return(
        <div className="Join-wrap">
            <Link to="/">
                <img src={ico} alt="뒤로가기 아이콘" className="back-ico"/>
            </Link>
            <h1>이메일 주소를 입력해주세요.</h1>
            <p>이메일주소로 로그인 할 수 있습니다.</p>
            <input/>
            <Link to="/join/password">
                <button type="submit">다음</button>
            </Link>
        </div>
    );
}

export default Id;