import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionServices from './componentsServicesPage/mainSectionServices';
import Footer from '../globalComponents/footer';
import WhatsApp from '../globalComponents/wppContact';

class ServicesPage extends Component{
    render(){

        $(window).on('load', function () {
            $('#preloader .inner').fadeOut();
            $('#preloader').delay(350).fadeOut('slow'); 
        });

        document.getElementsByTagName("title")[0].innerText = 'EverSistemas | Serviços';

        return(
            <div>

                <div id="ServicesPage">
                    <Header/>
                    <NavDesktop/>
                    <MainSectionServices/>
                    <Footer/>
                    <WhatsApp/>
                </div>

                <div id="preloader">
                    <div className="inner">
                        <div className="bolas">
                            <div></div>
                            <div></div>
                            <div></div>                    
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ServicesPage;
