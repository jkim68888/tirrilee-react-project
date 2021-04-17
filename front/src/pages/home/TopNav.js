import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/header-logo@2x.png';
import '../../common-styles.css';
import './styles.css';

const TopNav = () => {
    return(
        <div className="Top-nav-wrap">
            <Link to="/home">
                <img src={logo} alt="로고"/>
            </Link>
        </div>
    );
}

export default TopNav;