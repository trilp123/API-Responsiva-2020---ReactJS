import React, {Component} from 'react';
import './contact.css';

import Header from '../globalComponents/header';
import NavDesktop from '../globalComponents/nav_desktop';
import MainSectionContact from './componentsContact/mainSectionContact';
import Footer from '../globalComponents/footer';

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

