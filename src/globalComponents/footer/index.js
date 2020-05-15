import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Footer = () => (

    <div className="back">

        <footer className="footer ajuste">

           <p>© 2013 Web world. All rights reserved. Theme by EverSistemas</p>

           <ul id="socials_desktop">
            
                <a href="https://www.linkedin.com/in/pedromarim/">
                    <li>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </li>
                </a>

                <Link to="/contato">
                    <li>
                        <i className="fas fa-phone-square-alt fa-2x"></i>
                    </li>
                </Link>

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

        </footer>

    </div>

);

export default Footer;