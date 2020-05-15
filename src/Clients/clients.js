import React, {Component} from 'react';
import './clients.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionClients from './componentsClients/mainSectionClients';
import Footer from '../globalComponents/footer';

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