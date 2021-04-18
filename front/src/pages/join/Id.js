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
                <div className="btn-wrap">
                    <button type="submit" className="next-btn">다음</button>
                </div>
            </form>
        </div>
    );
}

export default Id;