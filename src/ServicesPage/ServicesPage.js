import React, { Component } from 'react';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionServices from './componentsServicesPage/mainSectionServices';
import Footer from '../globalComponents/footer';

class ServicesPage extends Component{
    render(){
        return(
            <div id="ServicesPage">
                <Header/>
                <NavDesktop/>
                <MainSectionServices/>
                <Footer/>
            </div>
        )
    }
}

export default ServicesPage;
