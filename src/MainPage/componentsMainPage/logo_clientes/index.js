import React from 'react';
import './index.css';

import first from '../../../assets/cliente1.jpg'
import second from '../../../assets/cliente2.jpg'
import third from '../../../assets/cliente3.jpg'
import fourth from '../../../assets/cliente4.jpg'


const LogoClientes = () => (

    <div className="ajuste">
        
        <section id="section-logo-clientes">

            <ul>

                <li className="logo_cliente">
                    <img src={first} alt="Logo primeiro cliente"/>
                </li>

                <li className="logo_cliente">
                    <img src={second} alt="Logo primeiro cliente"/>
                </li>

                <li className="logo_cliente">
                    <img src={third} alt="Logo primeiro cliente"/>
                </li>

                <li className="logo_cliente">
                    <img src={fourth} alt="Logo primeiro cliente"/>
                </li>

            </ul>

        </section>

    </div>
);

export default LogoClientes;