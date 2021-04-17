import React from 'react';
import TopNav from './TopNav';
import BottomNav from '../../components/BottomNav';
import MainBanner from '../../components/MainBanner';
import ItemLike from '../../components/ItemLike';
import HomeBanner from '../../components/HomeBanner';
import ItemNew from '../../components/ItemNew';
import '../../common-styles.css';
import './styles.css';

const Home = () => {
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