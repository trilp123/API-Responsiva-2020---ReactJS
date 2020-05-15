import React, { Component } from 'react';
import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionAboutUs from './componentsAboutUs/mainSectionAboutUs';
import Footer from '../globalComponents/footer';

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