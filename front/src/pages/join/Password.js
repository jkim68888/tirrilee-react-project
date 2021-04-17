import React from 'react';
import {Link} from 'react-router-dom';
import ico from '../../assets/img/icon-back.png';
import '../../common-styles.css';
import './styles.css';

const Password = () => {
    return(
        <div className="Join-wrap">
            <Link to="/">
                <img src={ico} alt="뒤로가기 아이콘" className="back-ico"/>
            </Link>
            <h1>패스워드를 입력해주세요.</h1>
            <p>알파벳+숫자+특수문자 포함 8자 이상입니다.</p>
            <input type="number" placeholder="비밀번호" min="8"/>
            <input type="number" placeholder="비밀번호 확인" min="8"/>
            <Link to="/home" className="link">
                <button type="submit">완료</button>
            </Link>
        </div>
    );
}

export default Password;