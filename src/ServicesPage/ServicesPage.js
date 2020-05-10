import React, { Component } from 'react';

import Header from './componentsServicesPage/header';
import NavDesktop from './componentsServicesPage/nav_desktop';
import MainSectionServices from './componentsServicesPage/mainSectionServices';
import Footer from './componentsServicesPage/footer';

class ServicesPage extends Component{
    render(){
        return(
            <div id="ServicesPage">
                <Header />
                <NavDesktop />
                <MainSectionServices/>
                <Footer />
            </div>
        )
    }
}

export default ServicesPage;
