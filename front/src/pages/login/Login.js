import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import logo from '../../assets/img/header-logo@2x.png';
import '../../common-styles.css';
import './styles.css';

const Login = ({user,email,password}) => {
  const history = useHistory();

  const [form,setValues] = useState({
    email:'',
    password:''
  });
  
  const handleInputChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userCredential) => {
        var user = userCredential.user;
        history.push({
          pathname: '/home',
          state: {user: user.uid}
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
  }

  return (
    <div className="Login-wrap">
      <div className="Login-table">
        <Link to="/" className="default-link">
          <img src={logo} alt="로고" className="Login-logo-img"/>
        </Link>
        <form className="Login-form" onSubmit={handleSubmit}>
          <input type="text" name="email" value={email} placeholder="아이디" className="Login-input-box" onChange={handleInputChange}/>
          <input type="password" name="password" value={password} placeholder="비밀번호" className="Login-input-box" onChange={handleInputChange}/>
          <button type="submit" className="Login-btn">로그인</button>
        </form>
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
