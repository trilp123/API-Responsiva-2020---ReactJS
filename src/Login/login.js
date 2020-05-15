import React, { Component } from 'react';
import './login.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainLogin from './loginComponents/mainLogin';
import Footer from '../globalComponents/footer';

class LoginPage extends Component{
    render(){
        return(
          <div>
            <Header/>
            <NavDesktop/>
            <MainLogin/>
            <Footer/>
          </div>
        )
    }
};

export default LoginPage;