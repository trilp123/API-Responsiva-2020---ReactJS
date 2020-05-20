import React, {Component} from 'react';
import $ from 'jquery';

import './clients.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionClients from './componentsClients/mainSectionClients';
import Footer from '../globalComponents/footer';
import WhatsApp from '../globalComponents/wppContact';

class Clients extends Component{
    render(){

        $(window).on('load', function () {
            $('#preloader .inner').fadeOut();
            $('#preloader').delay(350).fadeOut('slow'); 
        });

        document.getElementsByTagName("title")[0].innerText = 'EverSistemas | Clientes';

        return (
            <div>

                <div id="Clients">
                    <Header/>
                    <NavDesktop/>
                    <MainSectionClients/>
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

export default Clients;