import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import ico from '../../assets/img/icon-back.png';
import '../../common-styles.css';
import './styles.css';

const Id = () => {
    const history = useHistory();

    const [form,setValues] = useState({
        email:''
    });

    const handleInputChange = (event) => {
        const message = document.getElementById('validation-message');
        const next_btn = document.getElementById('next-btn');
        
        message.style.display = 'inline';

        if (event.target.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            message.textContent = '올바른 이메일 형식입니다.';
            message.style.color = '#6cd15a';
            next_btn.style.backgroundColor = '#226bef';
            next_btn.style.color = '#fff';
            next_btn.disabled = false;
        } else {
            message.textContent = '올바른 이메일 형식이 아닙니다.';
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
        history.push({
            pathname: "/join/password",
            state: {email: form.email}
        });
    };

    return(
        <div className="Join-wrap">
            <Link to="/">
                <img src={ico} alt="뒤로가기 아이콘" className="back-ico"/>
            </Link>
            <form onSubmit={handleSubmit}>
                <h1>이메일 주소를 입력해주세요.</h1>
                <p>이메일주소로 로그인 할 수 있습니다.</p>
                <input type="text" name="email" placeholder="이메일" onChange={handleInputChange}/>
                <p id="validation-message"></p>
                <div className="btn-wrap">
                    <button type="submit" disabled={true} id="next-btn">다음</button>
                </div>
            </form>
        </div>
    );
}

export default Id;