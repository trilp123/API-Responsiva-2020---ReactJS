import React, {Component} from 'react';
import $ from 'jquery';

import './contact.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionContact from './componentsContact/mainSectionContact';
import Footer from '../globalComponents/footer';

class ContactPage extends Component{
    render(){

        $(window).on('load', function () {
            $('#preloader .inner').fadeOut();
            $('#preloader').delay(350).fadeOut('slow'); 
        });

        document.getElementsByTagName("title")[0].innerText = 'EverSistemas | Contato';

        return(
            <div>

                <div>
                    <Header/>
                    <NavDesktop/>
                    <MainSectionContact/>
                    <Footer/>
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

export default ContactPage;

