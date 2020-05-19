import React, {Component} from 'react';
import $ from 'jquery';
import './MainPage.css';
import '.././assets/fontawesome-free-5.13.0-web/css/all.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import SlickSlider from './componentsMainPage/slick-slider';
import Services from './componentsMainPage/services';
import LogoClientes from './componentsMainPage/logo_clientes';
import PreFooter from './componentsMainPage/pré-footer';
import Footer from '../globalComponents/footer';
import WhatsApp from '../globalComponents/wppContact';

class MainPage extends Component{

  render() {

    $(window).on('load', function () {
      $('#preloader .inner').fadeOut();
      $('#preloader').delay(350).fadeOut('slow'); 
    });

    document.getElementsByTagName("title")[0].innerText = 'EverSistemas | Inicio';

    return(
  
      <div>
    
        <div id="MainPage">
          <Header/>
          <NavDesktop/>
          <SlickSlider/>
          <Services/>
          <LogoClientes/>
          <PreFooter/>
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

export default MainPage;
