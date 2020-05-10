import React from 'react';
import './index.css';

import CrtInv from '../../../assets/controle_estoque.jpeg'
import NFImg from '../../../assets/notafiscal.jpeg'

const Services = () => (

   <div className="bgc">

        <div className="serviços-container ajuste">

        <article className="serviço">
                <img src={CrtInv} alt="Logo de controle de inventário"/>
                <legend>Controle de inventário</legend>
                <h4>Manejo de itens, registros eficazes</h4>
                <p>Essa é a descrição do inventário aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>

        <article className="serviço">
                <img src={CrtInv} alt="Logo de controle de inventário"/>
                <legend>Controle de inventário</legend>
                <h4>Manejo de itens, registros eficazes</h4>
                <p>Essa é a descrição do inventário aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>

        <article className="serviço">
                <img src={CrtInv} alt="Logo de controle de inventário"/>
                <legend>Controle de inventário</legend>
                <h4>Manejo de itens, registros eficazes</h4>
                <p>Essa é a descrição do inventário aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>


        <article className="serviço">
                <img src={NFImg} alt="Logo de nota fiscal"/>
                <legend>Emissão de Nota Fiscal</legend>
                <h4>Emissão ágil e simples</h4>
                <p>Essa é a descrição das emissões aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>

        <article className="serviço">
                <img src={NFImg} alt="Logo de nota fiscal"/>
                <legend>Emissão de Nota Fiscal</legend>
                <h4>Emissão ágil e simples</h4>
                <p>Essa é a descrição das emissões aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>

        <article className="serviço ">
                <img src={NFImg} alt="Logo de nota fiscal"/>
                <legend>Emissão de Nota Fiscal</legend>
                <h4>Emissão ágil e simples</h4>
                <p>Essa é a descrição das emissões aaaaaaaaaaaaaa digita algo aqui
                    afsfsaf fassfa fsa fa a
                </p>
        </article>

        </div>

   </div>

);

export default Services;
