import React from 'react';
import './index.css';

const MainLogin = () => (
    <div>
        <form className="ajuste">

            <h1 id="title_login">Login</h1>

            <div className="input-container">
                <i className="fas fa-user fa-2x"></i>
                <input type="text" className="input-form transparent" placeholder=" Usuário"/>
            </div>

            <div className="input-container">
                <i className="fas fa-lock fa-2x"></i>
                <input type="password" className="input-form transparent" placeholder=" Senha"/>
            </div>

       
            <button className="button">Entrar</button>
       
        </form>
    </div>
);

export default MainLogin;