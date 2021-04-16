import React from 'react';
import {Link} from 'react-router-dom';
import ico from '../../assets/icon-back.png';
import '../../common-styles.css';
import './styles.css';

const Password = () => {
    return(
        <div className="Join-wrap">
            <Link to="/join">
                <img src={ico} alt="뒤로가기 아이콘" className="back-ico"/>
            </Link>
            <h1>패스워드를 입력해주세요.</h1>
            <p>알파벳+숫자+특수문자 포함 8자 이상입니다.</p>
            <input/>
            <Link to="/join/complete">
                <button type="submit">다음</button>
            </Link>
        </div>
    );
}

export default Password;