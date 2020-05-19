import React, { Component } from 'react';
import $ from 'jquery';

import './login.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainLogin from './loginComponents/mainLogin';
import Footer from '../globalComponents/footer';

class LoginPage extends Component{
    render(){

        $(window).on('load', function () {
          $('#preloader .inner').fadeOut();
          $('#preloader').delay(350).fadeOut('slow'); 
      });

      document.getElementsByTagName("title")[0].innerText = 'EverSistemas | Login';

        return(

          <div>

            <div>
              <Header/>
              <NavDesktop/>
              <MainLogin/>
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
};

export default LoginPage;