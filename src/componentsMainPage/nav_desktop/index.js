import React from 'react';
import './index.css'

const NavDesktop = () => (
    <div className="border-bottom bgc">
       <nav className="container-nav-desktop ajuste">
           
            <ul id="lista-nav-desktop">

                <li>
                    Home
                </li>

                <li>
                    Sobre nós
                </li>

                <li>
                    Serviços
                </li>

                <li>
                    Clientes
                </li>

                <li>
                    Contate-nos
                </li>

                <li>
                    <input type="text" placeholder=" Pesquisar ..."/>
                </li>

            </ul>

        </nav>
            
    </div>
);

export default NavDesktop;