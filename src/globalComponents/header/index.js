import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import './index.css';

import Logo from '../../assets/Logo.png';

function ShowMobileMenu(){
    $('header , footer , .container-nav-desktop, section , .serviços-container, #slider-container').not('#nav_mobile').fadeOut();
    $("#nav_mobile, #main-section-mobile, #footer_mobile").fadeIn(1000);
}

function HideMobileMenu(){
    $("#nav_mobile").fadeOut(0);
    $('header , footer , section , .serviços-container, #slider-container').fadeIn(1000);
}

function changepage(){
    $(window).on('click', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
    });
}

const Header = () => (
  
    <div className="back">

        <header className="main-header ajuste ">

            <Link to="/" onClick={changepage}>
                <img src={Logo} alt="Logo EverSitemas"/>
            </Link>

            <ul id="socials_desktop">

                <a href="https://www.linkedin.com/in/pedromarim/">
                    <li>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </li>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5519997677735&text=Queria uma informação sobre o sistema" target="_blank" rel="noopener noreferrer">
                    <li>
                        <i className="fab fa-whatsapp-square fa-2x"></i>
                    </li>
                </a>

                <a href="https://www.instagram.com/ever.sistemas/?hl=pt-br">
                    <li>
                        <i className="fab fa-instagram-square fa-2x"></i>
                    </li>
                </a>

                <a href="https://www.facebook.com/EverSistemass/">
                    <li>
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </li>
                </a>

            </ul>

            <button className="btn-menu" onClick={ShowMobileMenu}>
                <i className="fas fa-align-justify fa-lg" ></i>
            </button>

        </header>

        <nav id="nav_mobile">

            <img src={Logo} alt="Logo EverSitemas" onClick={changepage}></img>

            <button className="btn-close transparent" onClick={HideMobileMenu}>
                <i className="fas fa-times-circle fa-lg transparent"></i>
            </button>

            <section id="main-section-mobile">

                <ol id="lista_mobile">

                    <Link to="/" onClick={changepage}>
                        <li>
                            Home <i className="fas fa-home transparent"></i>
                        </li>
                    </Link>

                    <Link to="/sobre" onClick={changepage}>
                        <li>
                            Sobre nós <i className="fas fa-info transparent"></i>
                        </li>
                    </Link>

                    <Link to="/serviços" onClick={changepage}>
                        <li>
                            Serviços <i className="fas fa-laptop-house transparent"></i>
                        </li>
                    </Link>

                    <Link to="/clientes" onClick={changepage}>
                        <li>
                            Clientes <i className="fas fa-users transparent"></i>
                        </li>
                    </Link>

                    <Link to="/contato" onClick={changepage}>
                        <li>
                            Contate-nos <i className="fas fa-phone transparent"></i>
                        </li>
                    </Link>

                    <Link to="/user_login" onClick={changepage}>
                        <li>
                            Login <i className="fas fa-sign-in-alt"></i>
                        </li>
                    </Link>

                </ol>

                <ol id="lista_socialmedias_mobile"> 

                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5519997677735&text=Queria uma informação sobre o sistema" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp-square fa-2x"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/pedromarim/">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/ever.sistemas/?hl=pt-br">
                            <i className="fab fa-instagram-square fa-2x"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/EverSistemass/">
                            <i className="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>

                </ol>

            </section>

            <footer id="footer_mobile">
                <h1 className="footer_title_mobile transparent">
                    © 2020 Web world. All rights reserved. Theme by Eversistemas.
                </h1>
            </footer>

        </nav>

    </div>
  
);

export default Header;