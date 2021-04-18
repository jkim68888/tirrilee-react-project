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
        const message = document.getElementById('validation-message');
        const next_btn = document.getElementById('next-btn');
        const pw = document.getElementById('password');
        const pw_confirm = document.getElementById('password-confirm');
        
        message.style.display = 'inline';

        if (pw.value ===  pw_confirm.value) {
            message.textContent = '비밀번호가 일치합니다.';
            message.style.color = '#6cd15a';
            next_btn.style.backgroundColor = '#226bef';
            next_btn.style.color = '#fff';
            next_btn.disabled = false;
        } else {
            message.textContent = '비밀번호가 일치하지 않습니다.';
            message.style.color = '#e64841';
            next_btn.style.backgroundColor = '#eaeaea';
            next_btn.style.color = '#bfbfbf';
            next_btn.disabled = true;
        }

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
                <input type="password" name="password" id="password" placeholder="비밀번호" min="8" onChange={handleInputChange}/>
                <input type="password" name="password-confirm" id="password-confirm" placeholder="비밀번호 확인" min="8" onChange={handleInputChange}/>
                <p id="validation-message"></p>
                <div className="btn-wrap">
                    <button type="submit" disabled={true} id="next-btn">완료</button>
                </div>
            </form>
        </div>
    );
}

export default Password;