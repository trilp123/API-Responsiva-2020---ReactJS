import React, {Component} from 'react';
import './MainPage.css';
import './assets/fontawesome-free-5.13.0-web/css/all.css';

import Header from './componentsMainPage/header';
import NavDesktop from './componentsMainPage/nav_desktop';
import SlickSlider from './componentsMainPage/slick-slider';
import Services from './componentsMainPage/services';
import PreFooter from './componentsMainPage/pré-footer';
import Footer from './componentsMainPage/footer';
import LogoClientes from './componentsMainPage/logo_clientes';

class MainPage extends Component{

  render() {
    return(
      <div className="MainPage">
        <Header/>
        <NavDesktop/>
        <SlickSlider/>
        <Services/>
        <LogoClientes/>
        <PreFooter/>
        <Footer/>
      </div>
    )
  }
}

export default MainPage;
