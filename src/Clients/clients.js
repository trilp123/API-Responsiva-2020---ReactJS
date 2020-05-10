import React, {Component} from 'react';
import './clients.css';

import Header from './componentsClients/header';
import NavDesktop from './componentsClients/nav_desktop';
import Footer from './componentsClients/footer';
import MainSectionClients from './componentsClients/mainSectionClients';

class Clients extends Component{
    render(){
        return (
            <div id="Clients">
                <Header/>
                <NavDesktop/>
                <MainSectionClients/>
                <Footer/>
            </div>
        )
    }
}

export default Clients;