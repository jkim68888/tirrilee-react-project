import React, {useState} from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import ico from '../../assets/img/icon-back.png';
import '../../common-styles.css';
import './styles.css';

const Password = () => {
    const location = useLocation();

    const history = useHistory();

    const [form,setValues] = useState({
        email: location.state.email,
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
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                var user = userCredential.user;
                history.push({
                    pathname: "/home",
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

    return(
        <div className="Join-wrap">
            <Link to="/join">
                <img src={ico} alt="뒤로가기 아이콘" className="back-ico"/>
            </Link>
            <form onSubmit={handleSubmit}>
                <h1>패스워드를 입력해주세요.</h1>
                <p>알파벳+숫자+특수문자 포함 8자 이상입니다.</p>
                <input type="password" name="password" placeholder="비밀번호" min="8" onChange={handleInputChange}/>
                <input type="password" name="password-confirm" placeholder="비밀번호 확인" min="8"/>
                <div className="btn-wrap">
                    <button type="submit" className="next-btn">완료</button>
                </div>
            </form>
        </div>
    );
}

export default Password;