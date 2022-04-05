import React from 'react';
import './../../scss/components/Home.scss'

import Contact from "./Contact";
import Footer from "./Footer";

import HomeHeader from './HomeHeader';
import HomeAbout from "./HomeAbout";
import HomeFourSteps from "./HomeFourSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWeHelp from "./HomeHowWeHelp";



function Home() {
    return (
        <>
                <HomeHeader />
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAbout />
                <HomeWeHelp/>
                <Contact/>
                <Footer />  
        </>
    )

}

export default Home;