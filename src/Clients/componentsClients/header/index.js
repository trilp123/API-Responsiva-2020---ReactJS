import React from 'react';
import $ from 'jquery';
import './index.css';

import Logo from '../../../assets/Logo.png'

function ShowMobileMenu(){
    $("header").hide(1500);
    $("nav").show(1500);
}

function HideMobileMenu(){
    $("nav").hide(1500);
    $("header").show(1500);
}

const Header = () => (
  
    <div className="back">

        <header className="main-header ajuste ">

            <img src={Logo} alt="Logo EverSitemas"></img>

            <button className="btn-menu" onClick={ShowMobileMenu}>
                    <i className="fas fa-align-justify fa-lg" ></i>
            </button>

            <ul id="socials_desktop">

                <a href="https://www.linkedin.com/in/pedromarim/"><li><i className="fab fa-linkedin fa-2x"></i></li></a>
                <a href=""><li><i className="fas fa-phone-square-alt fa-2x"></i></li></a>
                <a href="https://www.instagram.com/ever.sistemas/?hl=pt-br"><li><i className="fab fa-instagram-square fa-2x"></i></li></a>
                <a href="https://www.facebook.com/EverSistemass/"><li><i className="fab fa-facebook-square fa-2x"></i></li></a>
                    
            </ul>

        </header>

        <nav id="nav_mobile">

            <img src={Logo} alt="Logo EverSitemas"></img>

            <button className="btn-close transparent" onClick={HideMobileMenu}>
                <i className="fas fa-times-circle fa-lg transparent"></i>
            </button>

            <section id="main-section-mobile">

                <ol id="lista_mobile">

                    <li>Home <i className="fas fa-home transparent"></i></li>
                    <li>Sobre nós <i className="fas fa-info transparent"></i></li>
                    <li>Serviços <i className="fas fa-laptop-house transparent"></i></li>
                    <li>Clientes <i className="fas fa-users transparent"></i></li>
                    <li>Quem somos <i className="fas fa-question fa-sm transparent"></i></li>

                </ol>

                <ol id="lista_socialmedias_mobile">            
                    <li>
                        <i className="fab fa-facebook-square fa-2x"></i>
                    </li>

                    <li>
                        <i className="fab fa-instagram-square fa-2x"></i>
                    </li>

                    <li>
                        <i className="fas fa-phone-square-alt fa-2x"></i>
                    </li>

                    <li>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </li>
                </ol>

            </section>

            <footer id="footer_mobile">
                <h1 className="footer_title_mobile transparent">© 2020 Web world. All rights reserved. Theme by Eversistemas.</h1>
            </footer>

        </nav>

    </div>
  
);

export default Header;