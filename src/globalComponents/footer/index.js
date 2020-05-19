import React from 'react';
import './index.css';

const Footer = () => (

    <div className="back">

        <footer className="footer ajuste">

           <p>© 2013 Web world. Todos os direitos reservados. Tema por EverSistemas</p>

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

        </footer>

    </div>

);

export default Footer;