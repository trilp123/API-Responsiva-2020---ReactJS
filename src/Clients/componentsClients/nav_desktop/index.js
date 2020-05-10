import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

const NavDesktop = () => (

    <div className="border-bottom bgc">
       <nav className="container-nav-desktop ajuste">
           
            <ul id="lista-nav-desktop">

                <li>
                <   Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/sobre">Sobre nós</Link>
                </li>

                <li>
                    <Link to="/serviços">Serviços</Link>
                </li>

                <li>
                    <Link to="/clientes">Clientes</Link>
                </li>

                <li>
                    <Link to="/contato">Contate-nos</Link>
                </li>

                <li>
                    <input type="text" placeholder=" Pesquisar ..."/>
                </li>

            </ul>

        </nav>
            
    </div>
);

export default NavDesktop;