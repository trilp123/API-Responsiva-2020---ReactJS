import React, {Component} from 'react';
import './MainPage.css';
import '.././assets/fontawesome-free-5.13.0-web/css/all.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import SlickSlider from './componentsMainPage/slick-slider';
import Services from './componentsMainPage/services';
import LogoClientes from './componentsMainPage/logo_clientes';
import PreFooter from './componentsMainPage/pré-footer';
import Footer from '../globalComponents/footer';

class MainPage extends Component{

  render() {
    return(
      <div id="MainPage">
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
