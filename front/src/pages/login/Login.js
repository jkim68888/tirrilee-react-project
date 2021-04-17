import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/header-logo@2x.png';
import '../../common-styles.css';
import './styles.css';

const Login = () => {
  return (
    <div className="Login-wrap">
      <div className="Login-table">
        <Link to="/" className="default-link">
          <img src={logo} alt="로고" className="Login-logo-img"/>
        </Link>
        <form>
          <input type="text" placeholder="아이디" className="Login-input-box"/>
          <input type="text" placeholder="아이디" className="Login-input-box"/>
        </form>
        <button type="submit" className="Login-btn">로그인</button>
        <div className="Login-bottom-form-wrap">
          <ul>
            <li>
              <Link to="/join" className="default-link">* 회원가입</Link>
            </li>
            <li>* ID / PW 찾기</li>
          </ul>
        </div>
        <div className="Login-agreement">
          간편 회원가입시 (주)oo의 <span>이용약관, 개인정보처리방침</span>을 읽고 <br/>
          이해하셨으며 해당 내용에 동의하신 것이 됩니다.
        </div>
      </div>
    </div>
  );
}

export default Login;
