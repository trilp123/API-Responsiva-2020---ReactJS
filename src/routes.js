import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import ServicesPage from './ServicesPage/ServicesPage';
import AboutUs from './AboutUs/AboutUs';
import Clients from './Clients/clients';
import Contact from './Contact/contact';
import LoginPage from './Login/login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainPage}/>
            <Route path="/serviços" component={ServicesPage}/>
            <Route path="/sobre" component={AboutUs}/>
            <Route path="/clientes" component={Clients}/>
            <Route path="/contato" component={Contact}/>
            <Route path="/user_login" component={LoginPage}/>
        </BrowserRouter>
    )
};