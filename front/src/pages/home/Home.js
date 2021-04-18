import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from '../../components/BottomNav';
import MainBanner from '../../components/MainBanner';
import ItemLike from '../../components/ItemLike';
import HomeBanner from '../../components/HomeBanner';
import ItemNew from '../../components/ItemNew';
import '../../common-styles.css';
import './styles.css';

const Home = () => {
    const location = useLocation();
    const history = useHistory();

    const user = location.state.user;

    if(!user){
        history.push("/");
    }else{
        console.log(`user uid 가 ${user} 인 유저가 존재합니다.`);
    }

    return(
        <div className="Home-wrap">
            <TopNav/>
            <MainBanner/>
            <ItemLike/>
            <HomeBanner/>
            <ItemNew/>
            <BottomNav/>
        </div>
    );
}

export default Home;