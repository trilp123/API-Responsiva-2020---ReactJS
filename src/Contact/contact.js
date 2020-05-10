import React, {Component} from 'react';
import './contact.css';

import Header from './componentsContact/header';
import NavDesktop from './componentsContact/nav_desktop';
import MainSectionContact from './componentsContact/mainSectionContact';
import Footer from './componentsContact/footer';

class ContactPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <NavDesktop/>
                <MainSectionContact/>
                <Footer/>
            </div>
        )
    }
}

export default ContactPage;

