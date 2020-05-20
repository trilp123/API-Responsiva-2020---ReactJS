import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import './index.css'

function changepage(){
    $(window).on('click', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
    });
}

const NavDesktop = () => (

    <div className="container-nav-desktop">

       <nav className="ajuste">
           
            <ul id="lista-nav-desktop">
            
                <li>
                    <Link to="/" onClick={changepage}>Home</Link>
                </li>

                <li>
                    <Link to="/sobre" onClick={changepage}>Sobre nós</Link>
                </li>

                <li>
                    <Link to="/serviços" onClick={changepage}>Serviços</Link>
                </li>

                <li>
                    <Link to="/clientes" onClick={changepage}>Clientes</Link>
                </li>

                <li>
                    <Link to="/contato" onClick={changepage}>Contate-nos</Link>
                </li>

                <li>
                    <Link to="/user_login" onClick={changepage}>Login</Link>
                </li>

                <li>
                    <input type="text" placeholder=" Pesquisar ..."/>
                </li>

            </ul>

        </nav>
            
    </div>
);

export default NavDesktop;