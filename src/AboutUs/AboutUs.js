import React, { Component } from 'react';
import Header from './componentsAboutUs/header';
import NavDesktop from './componentsAboutUs/nav_desktop';
import MainSectionAboutUs from './componentsAboutUs/mainSectionAboutUs';
import Footer from './componentsAboutUs/footer';

class AboutUs extends Component{
    render(){
        return(
            <div>
                <Header/>
                <NavDesktop/>
                <MainSectionAboutUs/>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;