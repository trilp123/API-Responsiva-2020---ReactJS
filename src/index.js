import React from 'react';  
import ReactDOM from 'react-dom';
import Routes from './routes';
import MainPage from './MainPage/MainPage';
import ServicesPage from './ServicesPage/ServicesPage';
import AboutUs from './AboutUs/AboutUs';
import Clients from './Clients/clients';
import Contact from './Contact/contact';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <MainPage/>
      <ServicesPage/>
      <AboutUs/>
      <Clients/>
      <Contact/>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);


